"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Heart } from "lucide-react";

const team = [
    {
        name: "Mike Ross",
        role: "Founder & Master Mechanic",
        image: "https://placehold.co/400x400/png?text=Mike",
        bio: "Over 20 years of experience restoring vintage motorcycles. Mike started SecondGear in his garage with a single Triumph Bonneville.",
    },
    {
        name: "Sarah Jenkins",
        role: "Sales Director",
        image: "https://placehold.co/400x400/png?text=Sarah",
        bio: "A former professional racer who knows exactly what riders need. Sarah ensures every customer finds their perfect match.",
    },
    {
        name: "David Chen",
        role: "Head of Service",
        image: "https://placehold.co/400x400/png?text=David",
        bio: "Certified by major manufacturers. David leads our inspection team, guaranteeing that every bike meets our rigorous standards.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 z-0" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Born from a Passion for the Open Road
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            SecondGear isn't just a dealership; it's a community of riders dedicated to keeping the spirit of motorcycling alive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center space-y-4"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To provide the highest quality pre-owned motorcycles with transparency and integrity.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center space-y-4"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Community</h3>
                            <p className="text-muted-foreground">
                                We support local riding groups and host monthly charity rides to give back.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center space-y-4"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Passion</h3>
                            <p className="text-muted-foreground">
                                Every bike we sell is one we'd be proud to ride ourselves. No compromises.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="https://placehold.co/800x600/png?text=Our+Garage"
                                    alt="Our Garage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold">Our Story</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Founded in 2010, SecondGear started as a small restoration project in a suburban garage.
                                Mike Ross, our founder, was frustrated with the lack of reliable sources for vintage bikes.
                                He decided to change that.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                What began as a hobby quickly grew into a full-fledged business. Today, we operate out of a
                                10,000 sq ft facility, but our core values remain the same: quality, honesty, and a love for the ride.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Meet the Crew</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The experts behind the machines. We are riders, mechanics, and enthusiasts just like you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
