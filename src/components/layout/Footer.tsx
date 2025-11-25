import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            SecondGear
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The premier destination for premium pre-owned motorcycles.
                            Inspected, certified, and ready to ride.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/shop?category=sport" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Sport Bikes
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=cruiser" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Cruisers
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=adventure" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Adventure
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=cafe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Cafe Racers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} alfism. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
