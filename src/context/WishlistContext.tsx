"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Vehicle } from "@/lib/data";

interface WishlistContextType {
    wishlist: Vehicle[];
    addToWishlist: (vehicle: Vehicle) => void;
    removeFromWishlist: (vehicleId: string) => void;
    isInWishlist: (vehicleId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<Vehicle[]>([]);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("wishlist");
        if (saved) {
            try {
                setWishlist(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (vehicle: Vehicle) => {
        if (!wishlist.find((v) => v.id === vehicle.id)) {
            setWishlist([...wishlist, vehicle]);
        }
    };

    const removeFromWishlist = (vehicleId: string) => {
        setWishlist(wishlist.filter((v) => v.id !== vehicleId));
    };

    const isInWishlist = (vehicleId: string) => {
        return wishlist.some((v) => v.id === vehicleId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
