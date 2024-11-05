"use client";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Fraunces:wght@300;400;700&family=Hedvig+Letters+Sans&family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          // theme={theme} 
        >
        <div className="flex flex-col min-h-screen">
          <header className="bg-darkBg text-white dark:bg-gray-800 px-10 py-4 border-b border-gray-600 flex justify-between">
            <div className="flex gap-4">
            <Link href="/blog">logo</Link>
            </div>
            <div className="flex gap-10">
            <Link href="./">Home</Link>
            <Link href="/blog">Blog</Link>
            </div>
            <div className="flex gap-4">
       <button onClick={toggleTheme} className="text-white text-xl flex items-center gap-2">
                  {theme === "light" ? <FiMoon /> : <FiSun />} 
                </button>
            <Link href="/forgot-password">Profile</Link>
            </div>
          </header>
          <main className="flex-grow bg-gray-800 text-white">{children}</main>
          <footer className="bg-gray-500 p-4">
            <div className="flex gap-10">
              <div className="flex gap-4">
                <p>Follow me</p>
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="https://twitter.com/devsoso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/devsoso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://devsoso.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <p>Phone</p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      +250788724867
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <p>Email:</p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      sbananayo98@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
