import './globals.css'
import type {Metadata} from 'next'
import {Poppins, Barlow} from 'next/font/google'

const inter = Poppins({subsets: ['latin'], weight: "400"});
const barlow = Barlow({subsets: ['latin'], weight: "500"});

export const metadata: Metadata = {
    title: 'Investiflex',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="winter">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
