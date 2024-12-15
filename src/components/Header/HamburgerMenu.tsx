"use client";

import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "../ui/button";
import HeaderLink from "./HeaderLink";
import ConnectWallet from "../Auth/ConnectWallet";

export default function HamburgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = event.target as HTMLElement;
        if (!targetElement.closest(".wrapper")) {
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <Button
                variant="ghost"
                className="hamburger-btn"
                onClick={toggleMenu}
            >
                <RxHamburgerMenu />
            </Button>
            {isMenuOpen && (
                <div className="hamburger-menu" onClick={handleMenuClick}>
                    <div className="wrapper">
                        <HeaderLink href="/">Domains</HeaderLink>
                        <HeaderLink href="/search">Search</HeaderLink>
                        <HeaderLink href="/resolver">Resolver</HeaderLink>
                        <HeaderLink href="/crawlers">Crawlers</HeaderLink>
                        <ConnectWallet />
                    </div>
                    <IoClose className="close" onClick={toggleMenu} />
                </div>
            )}
        </>
    );
}
