"use client";

import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export interface Domain {
    domain: string;
    address: string;
    network: string;
    creation: Date;
    expiration: Date;
    registration: Date;
    image: string;
    description: string;
}

export const domainColumns: ColumnDef<Domain>[] = [
    {
        accessorKey: "network",
        header: "Network",
        cell: ({ row }) => {
            const network = row.original.network;
            return <span>{network}</span>;
        },
    },
    {
        accessorKey: "domain",
        header: "Domain",
    },
    {
        accessorKey: "expiration",
        header: "Expiration",
        cell: ({ row }) => {
            const expiration = row.original.expiration;
            return <span>{formatDate(expiration)}</span>;
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const expiration = new Date(row.original.expiration).getTime();
            const now = Date.now();
            return <span>{expiration > now ? "Registered" : "Expired"}</span>;
        },
    },
];
