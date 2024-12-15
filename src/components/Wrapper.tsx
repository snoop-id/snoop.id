"use client";

import { WagmiProvider } from "wagmi";
import { mainnet, bsc, sei } from "wagmi/chains";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
    appName: "snoop.id",
    projectId: "0c239ede5abf42dedeef50fe96eac33c",
    chains: [bsc, mainnet, sei],
    ssr: true,
});

const queryClient = new QueryClient();

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <NextThemesProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster />
                    </NextThemesProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
