"use client";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-dark-bg text-sm text-light-text dark:text-dark-text px-10 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between">
      <div className="flex gap-4">
        <Link href="#">Logo</Link>
      </div>
      <div className="flex gap-10">
        <Link href="./">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-xl flex items-center gap-2"
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
        <Link href="/profile">Profile</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg text-light-text dark:text-dark-text text-sm  p-4">
      <div className="flex gap-[5rem] flex justify-center items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 items-center">
          <p>Follow me</p>
          <ul className="flex gap-4">
            <li>
              <a href="https://twitter.com/devsoso" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/devsoso" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://devsoso.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <p>Phone: </p>
          <a href="tel:+250788724867">+250788724867</a>
        </div>
        <div className="flex gap-4">
          <p>Email: </p>
          <a href="mailto:sbananayo98@gmail.com">sbananayo98@gmail.com</a>
        </div>
      </div>
      <div>
        <p className="text-sm text-center mt-2 ">2022 All rights reserved  - Developer sostene </p>
       </div>
    </footer>
  );
}