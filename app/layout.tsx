import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_Thai } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

// Runs before first paint so the saved or system theme and language apply without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t;var l=localStorage.getItem("lang");if(l==="en"||l==="th"){document.documentElement.lang=l}}catch(e){document.documentElement.dataset.theme="light"}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${notoSansThai.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>
          <Navbar />
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
