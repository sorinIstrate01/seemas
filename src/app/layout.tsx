import type { Metadata } from "next";

import Providers from "./(components)/providers";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/footer";
import { siteConfig } from "@/config/site";
import BookDemoModal from "@/components/layout/book-demo-modal";
import { Suspense } from "react";
import ScrollToTop from "@/components/custom-ui/scroll-to-top";
import Navbar from "@/components/layout/navbar/Navbar";

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SeemaS AI",
  icons: {
    icon: [
      {
        url: siteConfig.browser_logo,
        href: siteConfig.browser_logo,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: // subnavbar,
{
  children: React.ReactNode;
  // subnavbar: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`${albert.variable} font-albert overflow-x-hidden`} suppressHydrationWarning>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex flex-col min-h-[100svh] w-full">
              <ScrollToTop />
              <Suspense fallback={<></>}>
                <BookDemoModal />
              </Suspense>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
