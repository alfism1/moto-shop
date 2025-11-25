"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                            <p className="text-muted-foreground text-lg">
                                Have a question about a bike? Want to schedule a test ride?
                                Or just want to talk shop? We're here for you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        123 Rider's Lane<br />
                                        Motor City, MC 90210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">
                                        (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">
                                        hello@secondgear.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                                    <div className="text-muted-foreground space-y-1">
                                        <p className="flex justify-between gap-8">
                                            <span>Mon - Fri:</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </p>
                                        <p className="flex justify-between gap-8">
                                            <span>Saturday:</span>
                                            <span>10:00 AM - 4:00 PM</span>
                                        </p>
                                        <p className="flex justify-between gap-8">
                                            <span>Sunday:</span>
                                            <span>Closed</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card border border-white/10 rounded-2xl p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option>General Inquiry</option>
                                    <option>Test Ride Request</option>
                                    <option>Selling a Bike</option>
                                    <option>Service Request</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-background border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button className="w-full text-lg" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
