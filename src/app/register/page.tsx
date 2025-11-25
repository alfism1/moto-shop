"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import Link from "next/link";

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-muted-foreground">
                        Join the SecondGear community today
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    <Button variant="outline" className="w-full py-6 flex items-center gap-3 text-base font-normal border-white/10 hover:bg-white/5">
                        <GoogleIcon />
                        Sign up with Google
                    </Button>
                    <Button variant="outline" className="w-full py-6 flex items-center gap-3 text-base font-normal border-white/10 hover:bg-white/5">
                        <Facebook className="text-blue-500" />
                        Sign up with Facebook
                    </Button>
                </div>

                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or sign up with email</span>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full bg-background border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full bg-background border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="Create a password"
                        />
                    </div>

                    <Button className="w-full py-6 text-lg font-semibold mt-2">
                        Create Account
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                        Sign in
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
