"use client";

import React, { useState } from 'react';
import { fetchSenders, Sender } from '@/lib/mockData';
import SenderCard from '@/components/SenderCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Home() {
  const [senders, setSenders] = useState<Sender[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

  const handleScan = async () => {
    setIsLoading(true);
    // Simulate API call
    const data = await fetchSenders();
    setSenders(data);
    setIsLoading(false);
    setScanned(true);
  };

  const handleUnsubscribe = (id: string) => {
    // Optimistic UI update
    setSenders(current => current.filter(s => s.id !== id));

    // Check if empty
    if (senders.length <= 1) { // 1 because current hasn't updated in state yet strictly speaking, but filter returns new array. Logic check.
      // Actually simpler: we just unsubscribed. If array is empty, show 'All Clean'. 
      // We'll let the render handle "All Clean" UI.
      setOpenCompleteDialog(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Inbox Cleanup</h1>
          <p className="text-muted-foreground text-lg">Review and unsubscribe from unwanted emails.</p>
        </div>
        <Button
          onClick={handleScan}
          disabled={isLoading}
          size="lg"
          className="rounded-full font-semibold"
        >
          {isLoading ? 'Scanning...' : 'Scan Inbox'}
        </Button>
      </header>

      <div className="flex flex-col gap-4">
        {!scanned && (
          <Card className="p-16 text-center border-dashed border-2">
            <p className="text-muted-foreground text-lg">Ready to declutter? Click "Scan Inbox" to find subscriptions.</p>
          </Card>
        )}

        {scanned && senders.length === 0 && (
          <Card className="p-16 text-center border-dashed border-2 bg-muted/20">
            <p className="text-2xl font-bold text-foreground mb-2">All Clean! 🎉</p>
            <p className="text-muted-foreground">No active subscriptions found.</p>
          </Card>
        )}

        {senders.map(sender => (
          <SenderCard
            key={sender.id}
            sender={sender}
            onUnsubscribe={handleUnsubscribe}
          />
        ))}
      </div>

      <Dialog open={openCompleteDialog} onOpenChange={setOpenCompleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unsubscribed Successfully</DialogTitle>
            <DialogDescription>
              You have successfully unsubscribed from this sender.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpenCompleteDialog(false)}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
