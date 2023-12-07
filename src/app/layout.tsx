import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Provider from "@/app/provider";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Writter',
    description: 'Writter is not Twitter'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={raleway.className}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}
