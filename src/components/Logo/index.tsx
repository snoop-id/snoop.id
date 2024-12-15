import Image from "next/image";

export default function Logo({ size }: { size: number }) {
    return (
        <Image
            src="/logo.png"
            alt="snoop.id Logo"
            height={size}
            width={size}
            quality={100}
        />
    );
}
