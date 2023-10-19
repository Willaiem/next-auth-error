"use client";

import { signIn } from "next-auth/react";

export default function Home() {
    function handleClick() {
        signIn("credentials", {
            login: "123456u",
            password: "testtest",
            redirect: false,
        });
    }

    return (
        <main>
            <button onClick={handleClick}>Zaloguj się</button>
        </main>
    );
}
