"use client";

import { useTheme } from "next-themes";

import { FaSun, FaMoon } from "react-icons/fa";

import { Button } from "../ui/button";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
    );
}
