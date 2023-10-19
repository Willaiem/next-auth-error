"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeSwitch } from "./ThemeSwitch";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="py-4 px-8 flex items-center justify-around border-b">
            <div className="flex items-center gap-2">
                <div className="flex items-start flex-col leading-5 text-xl font-medium">
                    <Link href="/">
                        <p>ttt</p>
                        <p>ttt</p>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Popover>
                    <PopoverTrigger>
                        <div className="bg-zse-main border border-zse-main text-white px-6 py-1.5 rounded hover:bg-neutral-900/90 hover:border-neutral-900/90 hover:duration-200">
                            Konto
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="flex flex-col gap-3">
                            <p className="flex flex-col">
                                Nie posiadasz konta?
                                <Link
                                    href="/konto/rejestracja"
                                    className="text-zse-main underline hover:no-underline"
                                >
                                    Zarejestruj się
                                </Link>
                            </p>
                            <p className="flex flex-col">
                                Masz konto?
                                <Link
                                    href="/konto/logowanie"
                                    className="text-zse-main underline hover:no-underline"
                                >
                                    Zaloguj się
                                </Link>
                            </p>
                        </div>
                    </PopoverContent>
                </Popover>
                <ThemeSwitch />
            </div>
        </nav>
    );
}
