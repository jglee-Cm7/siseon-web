import type { Metadata } from "next";
import { Poiret_One, Nanum_Gothic } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import "./globals.css";

const poiretOne = Poiret_One({
  weight: ["400"],
  variable: "--font-poiret-one",
  subsets: ["latin"],
});

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "시선교회",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${poiretOne.variable} ${nanumGothic.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
