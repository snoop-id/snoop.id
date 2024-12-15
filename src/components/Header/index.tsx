import Link from "next/link";

import Logo from "../Logo";
import HeaderLink from "./HeaderLink";
import ThemeButton from "./ThemeButton";
import HamburgerMenu from "./HamburgerMenu";
import ConnectWallet from "../Auth/ConnectWallet";

import "./header.scss";

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/" className="brand">
                    <Logo size={35} />
                    <h1>
                        snoop<span>.id</span>
                    </h1>
                </Link>
                <div className="links">
                    <HeaderLink href="/">Domains</HeaderLink>
                    <HeaderLink href="/search">Search</HeaderLink>
                    <HeaderLink href="/resolver">Resolver</HeaderLink>
                    <HeaderLink href="/crawlers">Crawlers</HeaderLink>
                </div>
                <div className="actions">
                    <div className="small-buttons">
                        <ThemeButton />
                        <HamburgerMenu />
                    </div>
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
}
