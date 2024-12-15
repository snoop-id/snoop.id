import path from "path";

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        dynamicIO: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "components")],
        prependData: `@use "@/assets/mixins" as *;`,
    },
    transpilePackages: ["@web3-name-sdk/core"],
};

export default nextConfig;
