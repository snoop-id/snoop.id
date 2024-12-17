"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import "./connect-wallet.scss";

export default function ConnectWallet() {
    return (
        <div className="connect-btn-wrapper">
            <ConnectButton showBalance={false} />
        </div>
    );
}
