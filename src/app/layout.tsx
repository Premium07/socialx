import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import { dark } from "@clerk/themes";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Social-X",
  description:
    "Social X – Connect, share, and engage like never before! A next-gen social media platform bringing you closer to friends, trends, and communities. Join now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen `${poppins.variable} antialiased`">
              <header>
                <Navbar />
              </header>
              <section className="py-8">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="hidden lg:block lg:col-span-3">
                      <Sidebar />
                    </div>
                    <div className="lg:col-span-9">{children}</div>
                  </div>
                </div>
              </section>
            </main>
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
