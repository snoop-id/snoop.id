"use cache";

import { Suspense } from "react";

import SearchQuery from "@/components/Search/Query";
import { Skeleton } from "@/components/ui/skeleton";

export default async function SearchPage({
    params,
}: {
    params: Promise<{ query: string }>;
}) {
    const domain = (await params).query;

    return (
        <Suspense fallback={<Skeleton className="h-[140px] w-full" />}>
            {/* @ts-expect-error Async Server Component */}
            <SearchQuery domain={domain} />
        </Suspense>
    );
}
