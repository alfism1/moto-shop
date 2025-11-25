import { vehicles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Gauge, Zap, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { RelatedProducts } from "@/components/shop/RelatedProducts";
import { FinancingCalculator } from "@/components/shop/FinancingCalculator";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AddToWishlistButton } from "@/components/shop/AddToWishlistButton";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const vehicle = vehicles.find((v) => v.id === id);

    if (!vehicle) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <Breadcrumbs />
                {/* Back Button */}
                <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                    <Link href="/shop">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
                    </Link>
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-card">
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-card opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.name} view ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-primary font-medium mb-2">{vehicle.brand}</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{vehicle.name}</h1>
                            <p className="text-3xl font-bold text-foreground">${vehicle.price.toLocaleString()}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                            <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-xl">
                                <Calendar className="mb-2 text-primary" />
                                <span className="text-sm text-muted-foreground">Year</span>
                                <span className="font-bold">{vehicle.year}</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-xl">
                                <Gauge className="mb-2 text-primary" />
                                <span className="text-sm text-muted-foreground">Mileage</span>
                                <span className="font-bold">{vehicle.mileage.toLocaleString()} mi</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-xl">
                                <Zap className="mb-2 text-primary" />
                                <span className="text-sm text-muted-foreground">Power</span>
                                <span className="font-bold">{vehicle.specs.power}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Description</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {vehicle.description}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                This {vehicle.year} {vehicle.brand} {vehicle.name} is in excellent condition.
                                It features a {vehicle.specs.engine} engine and weighs {vehicle.specs.weight}.
                                Fully inspected and ready for the road.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {["50-Point Inspection Passed", "12-Month Warranty", "Clean Title", "Financing Available"].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle size={16} className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="flex-1 text-lg">
                                    Book Test Ride
                                </Button>
                                <Button size="lg" variant="outline" className="flex-1 text-lg">
                                    Contact Dealer
                                </Button>
                            </div>
                            <AddToWishlistButton vehicle={vehicle} className="w-full" />
                        </div>
                    </div>

                </div>
                {/* Financing Calculator Section */}
                <div className="mt-8 md:mt-16 max-w-2xl mx-auto">
                    <FinancingCalculator price={vehicle.price} />
                </div>

                {/* Related Products Section */}
                <div className="mt-8 md:mt-16">
                    <RelatedProducts
                        currentVehicleId={vehicle.id}
                        type={vehicle.type}
                        allVehicles={vehicles}
                    />
                </div>
            </div>
        </div>

    );
}
