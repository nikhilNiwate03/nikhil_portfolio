import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar/NavBar";
import LeftSideBar from "./components/Navbar/LeftSideBar";
import RightSideBar from "./components/Navbar/RightSideBar";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Customize as needed
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nikhil Niwate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="  max-w-7xl m-auto flex relative w-[100%]">
            <div
              className="sticky hidden lg:block  h-screen left-0 top-0 w-1/10 "
              style={{ borderRight: "1px solid rgb(32, 32, 33)" }}
            >
              <LeftSideBar />
            </div>
            <div className="flex-2  overflow-auto  relative">
              <NavBar />
              {children}
              <Footer />
            </div>
            {/* <div
              className="sticky  h-screen right-0 top-0 w-1/10"
              style={{ borderLeft: "1px solid rgb(32, 32, 33)" }}
            >
              <RightSideBar />
            </div> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
