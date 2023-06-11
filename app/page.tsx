"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold backdrop-blur-xl px-5 py-3 border-2 border-white/10 backdrop-brightness-75 text-white bg-black/20 rounded-3xl">
        欢迎来到 Cali 前端动效魔法学院
      </h1>

      <section>
        <ol className="grid grid-cols-1 gap-4">
          <motion.li
            className="relative z-20 w-[clamp(380px,50vw,550px)] p-5 text-xl bg-white/30 backdrop-brightness-90 backdrop-blur-lg border font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-50 to-zinc-200/20 border-white/10 shadow-md rounded-xl flex items-center justify-between"
            whileHover={{ y: -5, scale: 1.025 }}
          >
            <Link href="/lessons/1/final" className="absolute inset-0" />
            <span>#1 - 高雅的通知动画</span>
            <span className="text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18C11.1808 16.423 13.1364 14.5771 14.8172 12.5101C15.0609 12.2103 15.0609 11.7897 14.8172 11.4899C13.1364 9.42294 11.1808 7.57701 9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.li>
        </ol>
      </section>

      <footer></footer>
    </main>
  );
}
