import type { NextRequest } from "next/server";

import { getAddress, getMetadata } from "@/lib/domains";

export async function GET(request: NextRequest) {
    const { searchParams: params } = request.nextUrl;
    const domainName = params.get("domain");

    if (!domainName) {
        return new Response("Invalid domain", {
            status: 400,
        });
    }

    const metadata = await getMetadata(domainName);
    const address = await getAddress(domainName);

    // Get resolver
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_DATA_SERVICE}/resolve?domain=${domainName}`,
        );
        // eslint-disable-next-line no-var
        var redirect_url = (await response.json()).redirect_url;
    } catch (error) {
        console.error(error);
        return new Response("Error fetching domain resolver", {
            status: 500,
        });
    }

    return Response.json({ ...metadata, address, redirect_url });
}
