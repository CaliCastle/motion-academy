import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import Image from "next/image";
import seriesPosterBg from "./series_poster_bg.png";

const fontSans = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "前端动效魔法学院 - Cali",
  description:
    "「前端动效魔法学院」是由 Cali 打造的前端动效系列课程互动教学，Framer Motion 的实战演练。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <div className="fixed inset-0 z-0">
          <Image
            src={seriesPosterBg}
            alt=""
            fill
            priority
            className="object-cover object-center blur-sm scale-110"
          />
        </div>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
