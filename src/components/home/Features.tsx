"use client";

import { motion } from "framer-motion";
import { Wrench, Search, RefreshCw, BadgeCheck } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "Curated Selection",
        description: "We don't sell just any vehicle. We hand-pick models that meet our high standards for performance and style.",
    },
    {
        icon: Wrench,
        title: "Expertly Serviced",
        description: "Every vehicle undergoes a comprehensive mechanical overhaul by our master technicians.",
    },
    {
        icon: BadgeCheck,
        title: "Certified Warranty",
        description: "Ride with peace of mind. All our vehicles come with a 12-month comprehensive warranty.",
    },
    {
        icon: RefreshCw,
        title: "7-Day Return Policy",
        description: "Not the perfect fit? Return it within 7 days for a full refund, no questions asked.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SecondGear?</h2>
                    <p className="text-muted-foreground">
                        We're not just a shop; we're enthusiasts too. We understand what matters when buying a pre-owned vehicle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-background p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
