"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Browse our inventory today and find the vehicle you've been dreaming of.
                        Financing options available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-12" asChild>
                            <Link href="/shop">
                                View Inventory <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-12">
                            Contact Sales
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
