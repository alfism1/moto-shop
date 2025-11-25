"use client";

import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import { Vehicle } from "@/lib/data";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface AddToWishlistButtonProps {
    vehicle: Vehicle;
    className?: string;
}

export function AddToWishlistButton({ vehicle, className }: AddToWishlistButtonProps) {
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const [isSaved, setIsSaved] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsSaved(isInWishlist(vehicle.id));
    }, [isInWishlist, vehicle.id]);

    const toggleWishlist = () => {
        if (isSaved) {
            removeFromWishlist(vehicle.id);
            setIsSaved(false);
        } else {
            addToWishlist(vehicle);
            setIsSaved(true);
        }
    };

    if (!mounted) {
        return (
            <Button variant="outline" size="lg" className={`gap-2 ${className}`} disabled>
                <Heart size={20} />
                Add to Wishlist
            </Button>
        );
    }

    return (
        <Button
            variant={isSaved ? "default" : "outline"}
            size="lg"
            className={`gap-2 transition-all ${isSaved ? "bg-primary text-white hover:bg-primary/90" : ""} ${className}`}
            onClick={toggleWishlist}
        >
            <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
            {isSaved ? "Saved to Wishlist" : "Add to Wishlist"}
        </Button>
    );
}
