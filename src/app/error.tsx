"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-[calc(100dvh-70px)] gap-3 flex-col items-center justify-center">
            <h2 className="text-center">Something went wrong!</h2>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
        </main>
    );
}
