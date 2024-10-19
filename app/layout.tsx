import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Schedulrr",
  description: "Meeting app",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/*header*/}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {children}
          </main>
          {/* footer */}
          <footer className="bg-purple-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Adrian Danvila Daria</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
