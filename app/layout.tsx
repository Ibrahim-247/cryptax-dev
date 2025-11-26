import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "@/components/layouts/root-layout-client";
import { Providers } from "./providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Join Now || Cryptax Community",
  description:
    "Join the Cryptax Community to connect, share, and learn with fellow crypto enthusiasts. Stay updated with the latest news, discussions, and insights in the world of cryptocurrency taxation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <AntdRegistry>
          <Providers>
            <RootLayoutClient>
              {children}
              <Toaster position="top-center" />
            </RootLayoutClient>
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
