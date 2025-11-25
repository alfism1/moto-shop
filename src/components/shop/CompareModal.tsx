"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/lib/data";

interface CompareModalProps {
    isOpen: boolean;
    onClose: () => void;
    vehicles: Vehicle[];
    onRemove: (id: string) => void;
}

export function CompareModal({ isOpen, onClose, vehicles, onRemove }: CompareModalProps) {
    if (vehicles.length === 0) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-background border border-white/10 rounded-2xl shadow-2xl z-50 p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Compare Vehicles</h2>
                            <button
                                onClick={onClose}
                                className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 min-w-[200px]"></th>
                                        {vehicles.map((vehicle) => (
                                            <th key={vehicle.id} className="p-4 min-w-[250px] align-top">
                                                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                                    <Image
                                                        src={vehicle.image}
                                                        alt={vehicle.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <button
                                                        onClick={() => onRemove(vehicle.id)}
                                                        className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                                <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                                                <p className="text-primary font-bold text-lg mb-2">${vehicle.price.toLocaleString()}</p>
                                                <Button size="sm" className="w-full" asChild>
                                                    <Link href={`/shop/${vehicle.id}`}>View Details</Link>
                                                </Button>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    <tr className="bg-secondary/20">
                                        <td className="p-4 font-medium text-muted-foreground">Brand</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4 font-medium">{vehicle.brand}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-muted-foreground">Category</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.type}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-secondary/20">
                                        <td className="p-4 font-medium text-muted-foreground">Year</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.year}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-muted-foreground">Mileage</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.mileage.toLocaleString()} mi</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-secondary/20">
                                        <td className="p-4 font-medium text-muted-foreground">Engine</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.specs.engine}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-muted-foreground">Power</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.specs.power}</td>
                                        ))}
                                    </tr>
                                    <tr className="bg-secondary/20">
                                        <td className="p-4 font-medium text-muted-foreground">Weight</td>
                                        {vehicles.map((vehicle) => (
                                            <td key={vehicle.id} className="p-4">{vehicle.specs.weight}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
