import AppProviders from "@/providers/AppProviders";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} flex flex-col h-screen`}>
                <AppProviders>
                    <Navbar />
                    <div className="flex-1">{children}</div>
                </AppProviders>
            </body>
        </html>
    );
}
