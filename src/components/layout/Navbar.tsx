"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Menu, X, Search, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { scrollY } = useScroll();
    const router = useRouter();
    const { wishlist } = useWishlist();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsMobileMenuOpen(false);
        }
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm"
                : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            SecondGear
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex items-center relative mx-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-secondary/50 border border-white/10 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-primary w-48 lg:w-64"
                        />
                        <button type="submit" className="absolute right-3 text-muted-foreground hover:text-primary">
                            <Search size={16} />
                        </button>
                    </form>

                    {/* Wishlist Icon */}
                    <div className="hidden md:flex items-center mr-4">
                        <Link href="/shop/wishlist" className="relative text-muted-foreground hover:text-primary transition-colors">
                            <Heart size={20} />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                            <Link href="/login">Log In</Link>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                            <Link href="/sell">Sell Your Bike</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background border-b border-white/10"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-base font-medium text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-base font-medium text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="text-base font-medium text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-base font-medium text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                            <Button variant="ghost" className="w-full justify-start" asChild>
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                            </Button>
                            <Button className="w-full" asChild>
                                <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)}>Sell Your Bike</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
