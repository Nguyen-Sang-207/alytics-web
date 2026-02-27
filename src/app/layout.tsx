import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "Alytics – Turn Scattered Data Into Smart Decisions",
        template: "%s | Alytics",
    },
    description: "One simple dashboard to track your SaaS growth, MRR, churn and user behavior—without the chaos of multiple tools.",
    keywords: ["SaaS analytics", "MRR tracker", "churn analysis", "smart decisions", "data visualization"],
    authors: [{ name: "Alytics Team" }],
    creator: "Alytics",
    metadataBase: new URL("https://alytics.com"), // Replace with actual domain
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://alytics.com",
        title: "Alytics – Smart Data Decisions",
        description: "Turn complex metrics into clear insights that help you make better decisions, faster.",
        siteName: "Alytics",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alytics – Smart Data Decisions",
        description: "One simple dashboard to track your SaaS growth.",
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#3b82f6",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
            <body suppressHydrationWarning className="font-sans">{children}</body>
        </html>
    );
}
