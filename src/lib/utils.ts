import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date | number): string {
    if (typeof date === "number" || typeof date === "string") {
        date = new Date(date);
    }

    const pad = (num: number) => num.toString().padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTraitValue(array: any[], trait: string) {
    const traitIndex = array.findIndex(item => item.trait_type === trait);
    const value = traitIndex !== -1 ? array[traitIndex].value : 0;

    if (value % 1000 !== 0 && value !== 0) return value * 1000;
    return value;
}
