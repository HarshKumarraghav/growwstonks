import type { Metadata } from "next";
import "./globals.css";
import ThemeProviders from "@/Providers/ThemeProvider";
import Header from "@/components/Navigation/Header";
import QueryProvider from "@/Providers/QueryProvider";

export const metadata: Metadata = {
  title: "Groww Stonks",
  description: "Groww Stonks is a website for stock market analysis.",
  icons: {
    icon: "/logo/stonks.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          <ThemeProviders>
            <Header />
            <main>{children}</main>
          </ThemeProviders>
        </QueryProvider>
      </body>
    </html>
  );
}
