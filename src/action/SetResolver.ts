"use server";

export default async function SetResolver(
    signature: string,
    address: string,
    redirect: string,
    chain: number,
) {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_DATA_SERVICE}/resolve`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    signature,
                    address,
                    redirect,
                    chain,
                }),
            },
        );

        const response = await request.json();

        if (!response.status)
            return {
                status: false,
                error: response.error,
            };

        return {
            status: true,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            status: false,
            error: error.error,
        };
    }
}
