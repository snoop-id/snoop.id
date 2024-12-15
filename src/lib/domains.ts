import { createWeb3Name } from "@web3-name-sdk/core";

const web3Name = createWeb3Name();

export async function getMetadata(name: string) {
    const metadata = await web3Name.getMetadata({ name });
    return { ...metadata };
}

export async function getAddress(name: string) {
    const address = await web3Name.getAddress(name);
    return address;
}

export async function getDomain(name: string) {
    const domain = await web3Name.getDomainName({
        address: name,
        queryTldList: Object.keys(TLD_Chain),
    });

    return domain;
}

export enum TLD_Chain {
    bnb = "Binance Smart Chain",
    eth = "Ethereum",
    sol = "Solana",
    arb = "Arbitrum",
    sei = "SEI Chain",
    burger = "BurgerCities",
    inj = "Injective",
    cake = "PancakeSwap",
    manta = "Manta Network",
    ll = "LightLink",
    ail = "AILayer",
    floki = "Floki",
    gno = "Genome",
    merlin = "Merlin",
    tomo = "Tomo",
    taiko = "Taiko",
    zkf = "ZKFair",
    mph = "Morph",
    alien = "AlienX",
    zeta = "Zeta",
    duck = "DuckChain",
    mode = "Mode",
    wod = "World of Dypians",
    mint = "Mint",
}
