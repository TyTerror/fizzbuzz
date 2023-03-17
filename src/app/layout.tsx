import './globals.css'
import React from "react";
import Link from "next/link";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Link className="text-2xl p-5" href="/">Home</Link>
                {children}
            </body>
        </html>
    )
}
