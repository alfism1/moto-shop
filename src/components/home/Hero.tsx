"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 z-0" />

            {/* Abstract Shape */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px] z-0 blur-3xl opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
                                Premium Pre-Owned Vehicles
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                                Find Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                    Dream Machine
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-lg"
                        >
                            Discover a curated collection of high-quality, inspected secondhand vehicles.
                            From cafe racers to sports cars, find the ride that defines you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="text-lg px-8" asChild>
                                <Link href="/shop">
                                    Browse Inventory <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/20 hover:bg-primary/10" asChild>
                                <Link href="/sell">Sell Your Vehicle</Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-secondary/50">
                            {/* Placeholder for Hero Image */}
                            <Image
                                src="https://placehold.co/800x600/png?text=Premium+Vehicle"
                                alt="Premium Vehicle"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg max-w-xs"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">50-Point Inspection</p>
                                        <p className="text-xs text-muted-foreground">Every vehicle certified</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
