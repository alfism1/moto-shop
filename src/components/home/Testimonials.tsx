"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Cafe Racer Enthusiast",
        image: "https://placehold.co/100x100/png?text=AR",
        quote: "I was skeptical about buying used, but SecondGear's inspection process is the real deal. My Triumph runs like it's brand new.",
    },
    {
        name: "Sarah Chen",
        role: "Adventure Rider",
        image: "https://placehold.co/100x100/png?text=SC",
        quote: "Found my dream Africa Twin here. The team was incredibly knowledgeable and helped me set it up for my cross-country trip.",
    },
    {
        name: "Marcus Johnson",
        role: "Daily Commuter",
        image: "https://placehold.co/100x100/png?text=MJ",
        quote: "Fair prices, honest people, and great bikes. The 7-day return policy gave me the confidence to pull the trigger.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Rider Stories</h2>
                        <p className="text-muted-foreground mb-8">
                            Don't just take our word for it. Hear from the community of riders who found their perfect match at SecondGear.
                        </p>
                        <div className="flex items-center gap-2 text-yellow-500">
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <span className="text-foreground font-bold ml-2">4.9/5 Average Rating</span>
                        </div>
                    </div>

                    <div className="md:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="min-w-[300px] md:min-w-[350px] bg-secondary/30 p-8 rounded-2xl border border-white/5 snap-center"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
