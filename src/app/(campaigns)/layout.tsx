import "../globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/root/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "xreacher",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-bg">
          <main className="flex max-h-screen  bg-bg">
            <Sidebar />
            <section className="w-11/12 ">{children}</section>
            <Toaster />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
