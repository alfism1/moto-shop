"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign } from "lucide-react";

interface FinancingCalculatorProps {
    price: number;
}

export function FinancingCalculator({ price }: FinancingCalculatorProps) {
    const [downPayment, setDownPayment] = useState(price * 0.2); // Default 20%
    const [term, setTerm] = useState(60); // Default 60 months
    const [interestRate, setInterestRate] = useState(5.99); // Default 5.99%
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        const principal = price - downPayment;
        const monthlyRate = interestRate / 100 / 12;

        if (monthlyRate === 0) {
            setMonthlyPayment(principal / term);
        } else {
            const payment =
                (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
                (Math.pow(1 + monthlyRate, term) - 1);
            setMonthlyPayment(payment);
        }
    }, [price, downPayment, term, interestRate]);

    return (
        <div className="bg-card border border-white/10 rounded-xl p-4 md:p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Calculator className="text-primary" />
                <h3 className="text-xl font-bold">Financing Calculator</h3>
            </div>

            <div className="space-y-4">
                {/* Down Payment */}
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm text-muted-foreground">Down Payment</label>
                        <span className="font-bold">${downPayment.toLocaleString()}</span>
                    </div>
                    <Slider
                        value={[downPayment]}
                        min={0}
                        max={price}
                        step={100}
                        onValueChange={(val) => setDownPayment(val[0])}
                    />
                </div>

                {/* Term */}
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm text-muted-foreground">Term (Months)</label>
                        <span className="font-bold">{term} Months</span>
                    </div>
                    <Slider
                        value={[term]}
                        min={12}
                        max={84}
                        step={12}
                        onValueChange={(val) => setTerm(val[0])}
                    />
                </div>

                {/* Interest Rate */}
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm text-muted-foreground">Interest Rate</label>
                        <span className="font-bold">{interestRate}%</span>
                    </div>
                    <Slider
                        value={[interestRate]}
                        min={0}
                        max={20}
                        step={0.1}
                        onValueChange={(val) => setInterestRate(val[0])}
                    />
                </div>
            </div>

            <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Estimated Monthly Payment</span>
                    <div className="text-right">
                        <span className="text-3xl font-bold text-primary block">
                            ${Math.round(monthlyPayment).toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground">/mo</span>
                    </div>
                </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
                *Estimated payment for informational purposes only. Actual terms may vary.
            </p>
        </div>
    );
}
