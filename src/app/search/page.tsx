import { Suspense } from "react";

import SearchQuery from "@/components/Search/Query";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;

    if (!query.q) {
        return <p className="error">No results.</p>;
    }

    return (
        <Suspense fallback={<p>Loading...</p>}>
            {/* @ts-expect-error Async Server Component */}
            <SearchQuery domain={query.q} />
        </Suspense>
    );
}
