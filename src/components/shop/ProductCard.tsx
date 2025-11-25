"use client";

import { motion } from "framer-motion";
import { Vehicle } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Gauge, Calendar, Zap, Eye, Heart, ArrowLeftRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
    vehicle: Vehicle;
    index?: number;
    viewMode?: "grid" | "list";
    onQuickView?: (vehicle: Vehicle) => void;
    onCompare?: (vehicle: Vehicle) => void;
    isCompareSelected?: boolean;
}

export function ProductCard({ vehicle, index = 0, viewMode = "grid", onQuickView, onCompare, isCompareSelected = false }: ProductCardProps) {
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isSaved = isInWishlist(vehicle.id);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isSaved) {
            removeFromWishlist(vehicle.id);
        } else {
            addToWishlist(vehicle);
        }
    };

    if (viewMode === "list") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-white/10 bg-card overflow-hidden hover:border-primary/50 transition-colors flex flex-col md:flex-row"
            >
                {/* Image */}
                <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto shrink-0 overflow-hidden group">
                    <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-white">
                        ${vehicle.price.toLocaleString()}
                    </div>

                    {/* Actions (Compare & Wishlist) */}
                    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
                        <button
                            onClick={toggleWishlist}
                            className={`p-2 rounded-full backdrop-blur-md transition-colors ${isSaved ? "bg-primary text-white" : "bg-black/50 text-white hover:bg-black/70"}`}
                        >
                            <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
                        </button>

                    </div>

                    {/* Quick View Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="translate-y-4 group-hover:translate-y-0 transition-transform pointer-events-auto"
                            onClick={(e) => {
                                e.preventDefault();
                                onQuickView?.(vehicle);
                            }}
                        >
                            <Eye size={16} className="mr-2" /> Quick View
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-sm text-primary font-medium mb-1">{vehicle.brand}</p>
                                <Link href={`/shop/${vehicle.id}`} className="hover:text-primary transition-colors">
                                    <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                                </Link>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6 line-clamp-2">{vehicle.description}</p>

                        <div className="grid grid-cols-3 gap-4 max-w-md mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-muted-foreground" />
                                <span className="text-sm font-medium">{vehicle.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Gauge size={18} className="text-muted-foreground" />
                                <span className="text-sm font-medium">{vehicle.mileage.toLocaleString()} mi</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-muted-foreground" />
                                <span className="text-sm font-medium">{vehicle.specs.power}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button className="flex-1 md:w-auto" variant="secondary" asChild>
                            <Link href={`/shop/${vehicle.id}`}>View Details</Link>
                        </Button>
                        <Button
                            variant={isCompareSelected ? "default" : "outline"}
                            className="md:w-auto"
                            onClick={(e) => {
                                e.preventDefault();
                                onCompare?.(vehicle);
                            }}
                        >
                            <ArrowLeftRight size={16} className="mr-2" />
                            {isCompareSelected ? "Added" : "Compare"}
                        </Button>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group rounded-xl border border-white/10 bg-card overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-white">
                    ${vehicle.price.toLocaleString()}
                </div>

                {/* Actions (Compare & Wishlist) */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 items-start">
                    <button
                        onClick={toggleWishlist}
                        className={`p-2 rounded-full backdrop-blur-md transition-colors ${isSaved ? "bg-primary text-white" : "bg-black/50 text-white hover:bg-black/70"}`}
                    >
                        <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
                    </button>

                </div>

                {/* Quick View Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform pointer-events-auto"
                        onClick={(e) => {
                            e.preventDefault();
                            onQuickView?.(vehicle);
                        }}
                    >
                        <Eye size={16} className="mr-2" /> Quick View
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-sm text-primary font-medium mb-1">{vehicle.brand}</p>
                        <Link href={`/shop/${vehicle.id}`} className="hover:text-primary transition-colors">
                            <h3 className="text-xl font-bold">{vehicle.name}</h3>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 my-4">
                    <div className="flex flex-col items-center text-center">
                        <Calendar size={16} className="text-muted-foreground mb-1" />
                        <span className="text-xs font-medium">{vehicle.year}</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-l border-white/5">
                        <Gauge size={16} className="text-muted-foreground mb-1" />
                        <span className="text-xs font-medium">{vehicle.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-l border-white/5">
                        <Zap size={16} className="text-muted-foreground mb-1" />
                        <span className="text-xs font-medium">{vehicle.specs.power}</span>
                    </div>
                </div>

                <div className="mt-auto flex gap-2">
                    <Button className="flex-1" variant="secondary" asChild>
                        <Link href={`/shop/${vehicle.id}`}>View Details</Link>
                    </Button>
                    <Button
                        variant={isCompareSelected ? "default" : "outline"}
                        size="icon"
                        onClick={(e) => {
                            e.preventDefault();
                            onCompare?.(vehicle);
                        }}
                        title={isCompareSelected ? "Remove from Compare" : "Add to Compare"}
                    >
                        <ArrowLeftRight size={16} />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
