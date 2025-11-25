"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                        <Mail size={32} />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
                    <p className="text-muted-foreground">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full bg-background border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <Button className="w-full py-6 text-lg font-semibold">
                        Reset Password
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <Link
                        href="/login"
                        className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to log in
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
