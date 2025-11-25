"use client";

import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center gap-4 mb-8">
                    <Heart className="text-primary" size={32} />
                    <h1 className="text-4xl font-bold">Your Wishlist</h1>
                </div>

                {wishlist.length === 0 ? (
                    <div className="text-center py-20 bg-card border border-white/5 rounded-xl">
                        <Heart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                        <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                        <p className="text-muted-foreground mb-6">
                            Start exploring our inventory and save your favorite bikes!
                        </p>
                        <Button asChild>
                            <Link href="/shop">Browse Motorcycles</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wishlist.map((bike, index) => (
                            <ProductCard key={bike.id} bike={bike} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
