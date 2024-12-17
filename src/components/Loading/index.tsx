import Image from "next/image";

export default function Loading({
    size,
    white = false,
}: {
    size: number;
    white?: boolean;
}) {
    return (
        <Image
            src={white ? "/loading-white.svg" : "/loading.svg"}
            alt="Loading..."
            height={size}
            width={size}
        />
    );
}
