"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Info, Monitor } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annually");

  const plans = [
    {
      name: "BASIC",
      price: {
        annually: "3.35",
        monthly: "5.35", // higher for monthly
        onetime: "39.95"
      },
      billedText: {
        annually: "Billed $40.20 per year",
        monthly: "Billed monthly",
        onetime: "One-time payment"
      },
      features: [
        "Scan unlimited emails",
        "Clean up to 500 subscriptions",
        "Basic AI summaries",
        "Outlook & Gmail support"
      ]
    },
    {
      name: "PLUS",
      popular: true,
      price: {
        annually: "5.45",
        monthly: "9.95",
        onetime: "65.40"
      },
      billedText: {
        annually: "Billed $65.40 per year",
        monthly: "Billed monthly",
        onetime: "One-time payment"
      },
      features: [
        "Everything in Basic",
        "Advanced AI Insights",
        "Priority Support",
        "Multiple Accounts (up to 3)",
        "Auto-Unsubscribe Rules"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pick your Unsub AI plan</h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            {/* Billing Toggle */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold flex items-center gap-1">
                Billed
                <Info size={14} className="text-muted-foreground" />
              </span>
              <Tabs defaultValue="annually" className="w-auto" onValueChange={setBillingCycle}>
                <TabsList className="grid w-full grid-cols-3 bg-muted rounded-full p-1 h-auto">
                  <TabsTrigger value="annually" className="rounded-full px-6 py-2">Annually</TabsTrigger>
                  <TabsTrigger value="monthly" className="rounded-full px-6 py-2">Monthly</TabsTrigger>
                  <TabsTrigger value="onetime" className="rounded-full px-6 py-2">One Time</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Devices Toggle (Mock) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold">Devices</span>
              <div className="bg-muted rounded-full p-1 flex">
                <Button variant="secondary" size="sm" className="rounded-full px-6 shadow-sm bg-background text-foreground hover:bg-background">1</Button>
                <Button variant="ghost" size="sm" className="rounded-full px-6 text-muted-foreground opacity-50 cursor-not-allowed" disabled>2</Button>
                <Button variant="ghost" size="sm" className="rounded-full px-6 text-muted-foreground opacity-50 cursor-not-allowed" disabled>5</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative border-2 ${plan.popular ? 'border-primary/20 shadow-lg' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className={`mx-auto w-fit px-3 py-1 rounded bg-blue-100 text-blue-700 font-bold text-xs mb-4 uppercase tracking-wider ${plan.popular ? 'bg-green-100 text-green-700' : ''}`}>
                  {plan.name}
                </div>
                <CardTitle className="text-5xl font-bold flex items-end justify-center gap-1">
                  <span className="text-2xl font-normal text-muted-foreground">$</span>
                  {plan.price[billingCycle as keyof typeof plan.price]}
                  {billingCycle !== 'onetime' && <span className="text-lg font-normal text-muted-foreground">/month</span>}
                </CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">
                  {plan.billedText[billingCycle as keyof typeof plan.billedText]}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-6">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 rounded-xl shadow-md transition-all hover:-translate-y-1">
                  Buy Now
                </Button>
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-0.5 ${plan.popular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 bg-muted/30 p-4 rounded-lg">
          Secure payment via DodoPayments. 30-day money-back guarantee.
        </p>
      </div>
    </div>
  );
}
