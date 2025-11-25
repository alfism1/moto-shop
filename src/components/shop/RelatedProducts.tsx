"use client";

import { Vehicle } from "@/lib/data";
import { ProductCard } from "@/components/shop/ProductCard";
import { motion } from "framer-motion";

interface RelatedProductsProps {
    currentVehicleId: string;
    type: string;
    allVehicles: Vehicle[];
}

export function RelatedProducts({ currentVehicleId, type, allVehicles }: RelatedProductsProps) {
    // Filter vehicles by type, exclude current vehicle, and take top 4
    const relatedVehicles = allVehicles
        .filter((vehicle) => vehicle.type === type && vehicle.id !== currentVehicleId)
        .slice(0, 4);

    if (relatedVehicles.length === 0) return null;

    return (
        <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedVehicles.map((vehicle, index) => (
                    <ProductCard key={vehicle.id} vehicle={vehicle} index={index} />
                ))}
            </div>
        </section>
    );
}
