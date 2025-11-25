"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Gauge, Zap, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/lib/data";

interface QuickViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    vehicle: Vehicle | null;
}

export function QuickViewModal({ isOpen, onClose, vehicle }: QuickViewModalProps) {
    if (!vehicle) return null;

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
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col md:flex-row"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto">
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-primary px-3 py-1 rounded-full text-sm font-bold text-primary-foreground">
                                ${vehicle.price.toLocaleString()}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                            <div className="mb-6">
                                <p className="text-primary font-medium mb-1">{vehicle.brand}</p>
                                <h2 className="text-3xl font-bold mb-2">{vehicle.name}</h2>
                                <p className="text-muted-foreground">{vehicle.description}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                                    <Calendar className="mx-auto mb-2 text-primary" size={20} />
                                    <span className="block text-xs text-muted-foreground uppercase">Year</span>
                                    <span className="font-bold">{vehicle.year}</span>
                                </div>
                                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                                    <Gauge className="mx-auto mb-2 text-primary" size={20} />
                                    <span className="block text-xs text-muted-foreground uppercase">Mileage</span>
                                    <span className="font-bold">{vehicle.mileage.toLocaleString()}</span>
                                </div>
                                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                                    <Zap className="mx-auto mb-2 text-primary" size={20} />
                                    <span className="block text-xs text-muted-foreground uppercase">Power</span>
                                    <span className="font-bold">{vehicle.specs.power}</span>
                                </div>
                            </div>

                            <div className="space-y-3 mt-auto">
                                <Button className="w-full" size="lg" asChild>
                                    <Link href={`/shop/${vehicle.id}`}>
                                        View Full Details <ChevronRight size={16} className="ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full" onClick={onClose}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
