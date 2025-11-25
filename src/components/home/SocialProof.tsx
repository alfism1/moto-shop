"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Trophy, Users } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "2,000+",
        label: "Happy Riders",
    },
    {
        icon: ShieldCheck,
        value: "100%",
        label: "Certified Bikes",
    },
    {
        icon: Trophy,
        value: "15+",
        label: "Years Experience",
    },
    {
        icon: Star,
        value: "4.9/5",
        label: "Customer Rating",
    },
];

export function SocialProof() {
    return (
        <section className="py-12 border-y border-white/5 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center space-y-2"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary mb-2">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
