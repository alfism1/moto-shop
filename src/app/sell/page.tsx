"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, ClipboardCheck, DollarSign, Send } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "1. Submit Details",
        description: "Tell us about your bike. Make, model, year, mileage, and condition. Upload a few photos if you have them.",
    },
    {
        icon: ClipboardCheck,
        title: "2. Get Appraised",
        description: "Our experts will review your submission and provide a fair, market-based offer within 24 hours.",
    },
    {
        icon: DollarSign,
        title: "3. Get Paid",
        description: "Accept the offer, drop off your bike (or we'll pick it up), and get paid instantly. No hassle.",
    },
];

export default function SellPage() {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Sell Your Bike in Minutes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Skip the tire kickers and low-ballers. Get a fair, instant offer from the experts at SecondGear.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-white/10 p-8 rounded-2xl text-center relative"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Submission Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-card border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">Get Your Offer</h2>
                        <p className="text-muted-foreground">
                            Fill out the form below to get started.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Year</label>
                                <input
                                    type="number"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="2020"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Make</label>
                                <input
                                    type="text"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Triumph"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Model</label>
                                <input
                                    type="text"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Bonneville T120"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Mileage</label>
                                <input
                                    type="number"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="5000"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Condition</label>
                            <select className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                                <option>Excellent - Like New</option>
                                <option>Good - Minor Wear</option>
                                <option>Fair - Needs Service</option>
                                <option>Poor - Project Bike</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Additional Notes</label>
                            <textarea
                                rows={4}
                                className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Any modifications, damage, or service history..."
                            />
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <h3 className="font-bold mb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <Button className="w-full text-lg" size="lg">
                            Submit for Appraisal <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
