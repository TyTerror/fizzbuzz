import './globals.css';
import {Inter} from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
        <body>
            <div className="flex justify-center p-2">
                <Link className="text-2xl" href="/">Home</Link>
            </div>
            {children}
        </body>
        </html>
    );
}
