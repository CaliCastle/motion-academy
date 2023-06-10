"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const messagesDb = [
  "「小泽」Apple Vision Pro 真机佩戴体验：今天下午，我看见了未来。",
  "【影视飓风】现场视频！苹果第一款头显 Apple Vision Pro，真的太炸了！",
  "【真机试戴】苹果 Vision Pro 新头显太猛了！实际使用感受！10分钟看完最新情报｜小宁子",
  "【每天6杯咖啡】我的身体发生了什么变化?!",
  "【Cali 前端动效魔法学院】Ep.01 - 动画的核心",
  "【Anthony Fu】如何管理开源项目通知【英文】",
  "【Randy】我如何做笔记",
  "「前端趣谈」给 Vite 翻译文档顺便 Vitepress 修 Bug？",
];
function randomMessage() {
  return messagesDb[Math.floor(Math.random() * messagesDb.length)];
}

export default function FinalLessonOnePage() {
  const [notifications, setNotifications] = React.useState<[number, string][]>([
    [0, messagesDb[0]],
    [1, messagesDb[1]],
    [2, messagesDb[2]],
  ]);

  return (
    <div className="fixed inset-0">
      <div className="absolute top-0 right-0 inset-y-0 pr-4 pt-4">
        <ul className="grid grid-cols-1 gap-4">
          <AnimatePresence initial={false}>
            {notifications.map(([idx, message]) => (
              <motion.li
                layout="position"
                key={idx}
                className="relative z-20 w-64 p-5 text-base bg-white/10 backdrop-brightness-90 backdrop-blur-lg border font-medium text-transparent bg-clip-text bg-gradient-to-br from-zinc-50 to-zinc-200/20 border-white/10 shadow-md rounded-xl"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.05 }}
                  type="button"
                  aria-label="关闭通知"
                  className="absolute -left-4 -top-2 text-xs text-white/80 bg-black/10 rounded-full px-1.5 py-0.5 border border-white/10 z-50"
                  onClick={() => {
                    setNotifications((prev) =>
                      prev.filter(([index]) => index !== idx)
                    );
                  }}
                >
                  关闭
                </motion.button>

                <p>{message}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.05 }}
          type="button"
          className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300/20 rounded-full px-4 py-1 border border-white/10 backdrop-blur-lg"
          onClick={() => {
            setNotifications((prev) => [
              ...prev,
              [new Date().getTime(), randomMessage()],
            ]);
          }}
        >
          模拟通知
        </motion.button>
      </div>
    </div>
  );
}
