"use cache";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { formatDate, getTraitValue } from "@/lib/utils";
import { TLD_Chain } from "@/lib/domains";

export default async function SearchQuery({ domain }: { domain: string }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}/domains?domain=${domain}`,
    );
    const metadata = await response.json();

    const domainName = metadata.name.split(".")[0];
    const tld = metadata.name.split(".")[1] as keyof typeof TLD_Chain;

    return (
        <div className="metadata">
            <div className="overview">
                <img src={metadata.image} alt={metadata.name} />
                <div>
                    <h2>
                        {domainName}.<span>{tld}</span>
                    </h2>
                    <p>{metadata.description}</p>
                </div>
            </div>
            <hr />
            <div className="expiration border-[1px] rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Expiration</TableHead>
                            <TableHead>Creation</TableHead>
                            <TableHead>Registration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {formatDate(
                                    getTraitValue(
                                        metadata.attributes,
                                        "Expiration Date",
                                    ),
                                )}
                            </TableCell>
                            <TableCell>
                                {formatDate(
                                    getTraitValue(
                                        metadata.attributes,
                                        "Created Date",
                                    ),
                                )}
                            </TableCell>
                            <TableCell>
                                {formatDate(
                                    getTraitValue(
                                        metadata.attributes,
                                        "Registration Date",
                                    ),
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <hr />
            <div className="details">
                <div>
                    <h3>Owner</h3>
                    <p>{metadata.address}</p>
                </div>
                <div>
                    <h3>Chain</h3>
                    <p>{TLD_Chain[tld]}</p>
                </div>
                {metadata?.redirect_url && (
                    <div>
                        <h3>Redirected</h3>
                        <p>{metadata.redirect_url}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
