"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles, Vehicle } from "@/lib/data";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Filter, X, LayoutGrid, List, ChevronLeft, ChevronRight } from "lucide-react";
import { QuickViewModal } from "@/components/shop/QuickViewModal";

import { CompareModal } from "@/components/shop/CompareModal";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

// ... (existing code)

const ITEMS_PER_PAGE = 12;

const types = ["All", "Sport", "Cruiser", "Cafe Racer", "Adventure", "Sedan", "SUV", "Coupe", "Truck"];
const brands = ["All", ...Array.from(new Set(vehicles.map((v) => v.brand)))];

function ShopContent() {
    const [selectedCategory, setSelectedCategory] = useState("All"); // "All", "Motorcycle", "Car"
    const [selectedType, setSelectedType] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 150000]);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("featured");
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    // Compare State
    const [compareList, setCompareList] = useState<Vehicle[]>([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const searchQuery = searchParams.get("search") || "";

    // Filter Logic
    const filteredVehicles = vehicles.filter((vehicle) => {
        const matchesCategory = selectedCategory === "All" || vehicle.category === selectedCategory;
        const matchesType = selectedType === "All" || vehicle.type === selectedType;
        const matchesBrand = selectedBrand === "All" || vehicle.brand === selectedBrand;
        const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
        const matchesSearch = searchQuery
            ? vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.type.toLowerCase().includes(searchQuery.toLowerCase())
            : true;

        return matchesCategory && matchesType && matchesBrand && matchesPrice && matchesSearch;
    }).sort((a, b) => {
        switch (sortBy) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "year-desc":
                return b.year - a.year;
            case "mileage-asc":
                return a.mileage - b.mileage;
            default:
                return 0; // Featured/Default order
        }
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
    const currentVehicles = filteredVehicles.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const clearFilters = () => {
        setSelectedCategory("All");
        setSelectedType("All");
        setSelectedBrand("All");
        setPriceRange([0, 150000]);
        setSortBy("featured");
        setCurrentPage(1);
        if (searchQuery) {
            router.push("/shop");
        }
    };

    const removeFilter = (type: "category" | "type" | "brand" | "price" | "sort" | "search") => {
        if (type === "category") setSelectedCategory("All");
        if (type === "type") setSelectedType("All");
        if (type === "brand") setSelectedBrand("All");
        if (type === "price") setPriceRange([0, 150000]);
        if (type === "sort") setSortBy("featured");
        if (type === "search") router.push("/shop");
        setCurrentPage(1);
    };

    const handleQuickView = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
        setIsQuickViewOpen(true);
    }; // This closing brace was removed in the user's provided snippet, but it's necessary for valid syntax.

    const handleCompare = (vehicle: Vehicle) => {
        if (compareList.find(v => v.id === vehicle.id)) {
            setCompareList(compareList.filter(v => v.id !== vehicle.id));
        } else {
            if (compareList.length >= 3) {
                toast.error("Limit Reached", {
                    description: "You can compare up to 3 vehicles at a time.",
                });
                return;
            }
            setCompareList([...compareList, vehicle]);
            toast.success("Added to Compare", {
                description: `${vehicle.name} has been added to comparison.`,
            });
        }
    };

    const hasActiveFilters = selectedCategory !== "All" || selectedType !== "All" || selectedBrand !== "All" || priceRange[0] > 0 || priceRange[1] < 150000 || sortBy !== "featured" || !!searchQuery;

    return (
        <div className="min-h-screen bg-background py-12">
            <QuickViewModal
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                vehicle={selectedVehicle}
            />

            <CompareModal
                isOpen={isCompareModalOpen}
                onClose={() => setIsCompareModalOpen(false)}
                vehicles={compareList}
                onRemove={(id) => setCompareList(compareList.filter(v => v.id !== id))}
            />

            <div className="container mx-auto px-4 md:px-6">
                <Breadcrumbs />

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inventory</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore our curated selection of premium pre-owned motorcycles and cars.
                        Find the perfect ride for your next adventure.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4 flex justify-between gap-4">
                        <Button
                            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            className="flex-1 flex items-center justify-center gap-2"
                            variant="outline"
                        >
                            <Filter size={16} />
                            {isMobileFiltersOpen ? "Hide Filters" : "Show Filters"}
                        </Button>
                        <div className="flex bg-secondary rounded-md p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-sm transition-colors ${viewMode === "grid" ? "bg-background shadow-sm" : "text-muted-foreground"}`}
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-sm transition-colors ${viewMode === "list" ? "bg-background shadow-sm" : "text-muted-foreground"}`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Filters Sidebar */}
                    <div className={`lg:w-1/4 space-y-8 ${isMobileFiltersOpen ? "block" : "hidden lg:block"}`}>
                        <div className="bg-card border border-white/10 rounded-xl p-6 space-y-8 sticky top-24">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-lg">Filters</h3>
                                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-muted-foreground hover:text-primary">
                                    Reset All
                                </Button>
                            </div>

                            {/* Category Filter (Car vs Motorcycle) */}
                            <div className="space-y-3">
                                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Category</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["All", "Motorcycle", "Car"].map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                                            className={`text-sm px-3 py-1.5 rounded-full transition-colors ${selectedCategory === cat
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div className="space-y-3">
                                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Type</h4>
                                <div className="flex flex-wrap gap-2">
                                    {types.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => { setSelectedType(type); setCurrentPage(1); }}
                                            className={`text-sm px-3 py-1.5 rounded-full transition-colors ${selectedType === type
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Brand Filter */}
                            <div className="space-y-3">
                                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Brand</h4>
                                <div className="space-y-2">
                                    {brands.map((brand) => (
                                        <div key={brand} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id={brand}
                                                name="brand"
                                                checked={selectedBrand === brand}
                                                onChange={() => { setSelectedBrand(brand); setCurrentPage(1); }}
                                                className="accent-primary w-4 h-4"
                                            />
                                            <label htmlFor={brand} className="text-sm cursor-pointer select-none">
                                                {brand}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Price Range</h4>
                                    <span className="text-xs font-mono text-primary">
                                        ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                                    </span>
                                </div>
                                <Slider
                                    defaultValue={[0, 150000]}
                                    max={150000}
                                    step={1000}
                                    value={priceRange}
                                    onValueChange={(val) => { setPriceRange(val); setCurrentPage(1); }}
                                    className="py-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Grid/List Content */}
                    <div className="lg:w-3/4">
                        {/* Desktop View Toggle & Sorting */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                            {/* Active Filters Chips */}
                            <div className="flex flex-wrap gap-2 flex-1">
                                {selectedCategory !== "All" && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        {selectedCategory}
                                        <button onClick={() => removeFilter("category")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {selectedType !== "All" && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        {selectedType}
                                        <button onClick={() => removeFilter("type")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {selectedBrand !== "All" && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        {selectedBrand}
                                        <button onClick={() => removeFilter("brand")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {(priceRange[0] > 0 || priceRange[1] < 150000) && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        ${priceRange[0]} - ${priceRange[1]}
                                        <button onClick={() => removeFilter("price")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {sortBy !== "featured" && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Sort: {sortBy.replace("-", " ")}
                                        <button onClick={() => removeFilter("sort")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {searchQuery && (
                                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Search: "{searchQuery}"
                                        <button onClick={() => removeFilter("search")} className="hover:text-primary/80"><X size={14} /></button>
                                    </div>
                                )}
                                {hasActiveFilters && (
                                    <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-primary underline">
                                        Clear All
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-card border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="year-desc">Newest Year</option>
                                    <option value="mileage-asc">Lowest Mileage</option>
                                </select>

                                <div className="hidden lg:flex bg-secondary/50 border border-white/5 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                        title="Grid View"
                                    >
                                        <LayoutGrid size={20} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                        title="List View"
                                    >
                                        <List size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={viewMode === "grid"
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            : "flex flex-col gap-6"
                        }>
                            <AnimatePresence mode="popLayout">
                                {currentVehicles.map((vehicle, index) => (
                                    <ProductCard
                                        key={vehicle.id}
                                        vehicle={vehicle}
                                        index={index}
                                        viewMode={viewMode}
                                        onQuickView={handleQuickView}
                                        onCompare={handleCompare}
                                        isCompareSelected={!!compareList.find(v => v.id === vehicle.id)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Empty State */}
                        {filteredVehicles.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-card border border-white/5 rounded-xl"
                            >
                                <p className="text-xl text-muted-foreground mb-4">
                                    No vehicles match your criteria.
                                </p>
                                <Button onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </motion.div>
                        )}

                        {/* Pagination Controls */}
                        {filteredVehicles.length > 0 && (
                            <div className="mt-12 flex justify-center items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    <ChevronLeft size={16} />
                                </Button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 ${currentPage !== page ? "border-white/10 hover:bg-white/5" : ""}`}
                                    >
                                        {page}
                                    </Button>
                                ))}

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    <ChevronRight size={16} />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* Floating Compare Bar */}
            <AnimatePresence>
                {compareList.length > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 bg-card border-t border-white/10 p-4 shadow-2xl z-40"
                    >
                        <div className="container mx-auto flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="font-bold">{compareList.length} Selected</span>
                                <div className="hidden md:flex gap-2">
                                    {compareList.map(vehicle => (
                                        <div key={vehicle.id} className="text-xs bg-secondary px-2 py-1 rounded-full flex items-center gap-1">
                                            {vehicle.name}
                                            <button onClick={() => handleCompare(vehicle)} className="hover:text-red-500"><X size={12} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" onClick={() => setCompareList([])}>Clear All</Button>
                                <Button onClick={() => setIsCompareModalOpen(true)} disabled={compareList.length < 2}>
                                    Compare Now ({compareList.length})
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div >
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
            <ShopContent />
        </Suspense>
    );
}
