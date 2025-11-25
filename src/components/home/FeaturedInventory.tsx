"use client";

import { vehicles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedInventory() {
    // Show only first 3 vehicles
    const featuredVehicles = vehicles.slice(0, 3);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Arrivals</h2>
                        <p className="text-muted-foreground max-w-xl">
                            Hand-picked from our latest collection. Each vehicle has passed our rigorous 50-point inspection process.
                        </p>
                    </div>
                    <Button variant="ghost" className="group" asChild>
                        <Link href="/shop">
                            View All Inventory
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredVehicles.map((vehicle, index) => (
                        <ProductCard key={vehicle.id} vehicle={vehicle} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
