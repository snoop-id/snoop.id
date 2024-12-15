import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans } from "next/font/google";

import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

import "@/assets/globals.css";

// Fonts
const inter = Inter({
    weight: ["400", "500", "600", "700"],
    variable: "--inter",
    subsets: ["latin"],
});

const poppins = Poppins({
    weight: ["400", "500", "600"],
    variable: "--poppins",
    subsets: ["latin"],
});

const notoSans = Noto_Sans({
    weight: ["400", "500", "600"],
    variable: "--noto-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "snoop.id - Web3 Domain Resolver",
    description: "Web3 Domain Resolver built on Space.id",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${poppins.variable} ${notoSans.variable} antialiased`}
            >
                <Wrapper>
                    <Header />
                    <div className="content-wrapper">
                        <main>{children}</main>
                    </div>
                </Wrapper>
            </body>
        </html>
    );
}
