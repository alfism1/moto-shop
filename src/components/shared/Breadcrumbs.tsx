"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter((path) => path);

    if (paths.length === 0) return null;

    return (
        <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
                <Home size={14} className="mr-1" />
                Home
            </Link>
            {paths.map((path, index) => {
                const href = `/${paths.slice(0, index + 1).join("/")}`;
                const isLast = index === paths.length - 1;
                const label = path.charAt(0).toUpperCase() + path.slice(1);

                return (
                    <div key={path} className="flex items-center">
                        <ChevronRight size={14} className="mx-2 text-white/20" />
                        {isLast ? (
                            <span className="text-foreground font-medium">{label}</span>
                        ) : (
                            <Link href={href} className="hover:text-primary transition-colors">
                                {label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
