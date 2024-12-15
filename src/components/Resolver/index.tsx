"use client";

import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getDomain } from "@/lib/domains";
import { useToast } from "@/hooks/use-toast";
import SetResolver from "@/action/SetResolver";

export default function Resolver() {
    const { toast } = useToast();

    const { address, chainId } = useAccount();
    const { signMessageAsync } = useSignMessage();

    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState("");
    const [pending, setPending] = useState(false);

    const handleSign = async () => {
        const name = await getDomain(address as string);

        const message = `Redirecting ${name} to ${redirect}`;
        const signature = await signMessageAsync({ message });

        return signature;
    };

    const submit = async () => {
        setPending(true);

        try {
            // eslint-disable-next-line no-var
            var signature = await handleSign();
        } catch (error) {
            console.error(error);
            setPending(false);
            return;
        }

        SetResolver(signature, address as string, redirect, chainId!)
            .then(response => {
                if (!response.status) {
                    setError(response.error);
                    return;
                }

                toast({
                    title: "Resolver set",
                    description: `Your Web3 domain will be redirected to ${redirect}`,
                });
            })
            .catch(error => {
                console.error(error);
                setError("An error occurred while setting the resolver");
            })
            .finally(() => {
                setPending(false);
            });
    };

    if (!address || !chainId) {
        return (
            <p className="error">
                Please connect your wallet to set a resolver.
            </p>
        );
    }

    return (
        <>
            <div className="resolver-form">
                <Input
                    placeholder="https://snoop.id"
                    onChange={e => setRedirect(e.target.value)}
                />
                <Button disabled={pending} onClick={submit}>
                    Set
                </Button>
            </div>
            {error && <p className="error">{error}</p>}
        </>
    );
}
