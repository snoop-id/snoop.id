"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { RiSendPlaneFill } from "react-icons/ri";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Search() {
    const router = useRouter();
    const pathname = usePathname();

    const [domain, setDomain] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (pathname.startsWith("/search/")) {
            setDomain(pathname.replace("/search/", ""));
        }
    }, [pathname]);

    function submit() {
        if (!domain) {
            setError("Domain is required");
            return;
        }
        if (domain.indexOf(".") === -1) {
            setError("Invalid domain");
            return;
        }

        router.push(`/search/${domain}`);
    }

    return (
        <div className="searchbar">
            <div>
                <Input
                    name="domain"
                    value={domain || ""}
                    placeholder="spaceid.bnb"
                    onChange={e => setDomain(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            submit();
                        }
                    }}
                />
                <Button onClick={submit}>
                    <RiSendPlaneFill />
                </Button>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
