"use client";

import Image, { StaticImageData } from "next/image";
import offScreenIcon from "./assets/app_1.png";
import offScreenStoryImage from "./assets/story_1.png";
import starRailIcon from "./assets/app_2.png";
import starRailStoryImage from "./assets/story_2.png";
import * as React from "react";

type App = {
  name: string;
  excerpt: string;
  icon: StaticImageData;
};
type FeaturedStory = {
  app: App;
  reason: string;
  title: string;
  image: StaticImageData;
  backgroundColor: string;
};
const featuredStories: FeaturedStory[] = [
  {
    reason: "APP 即生活",
    title: "柳毅：当我不带手机回家",
    image: offScreenStoryImage,
    backgroundColor: "#3F2C4C",
    app: {
      name: "OffScreen - 自律番茄钟，不做手机控",
      excerpt: "屏幕时间管理，专注学习计时器",
      icon: offScreenIcon,
    },
  },
  {
    reason: "主打游戏推荐",
    title: "开启前所未有的旅行",
    image: starRailStoryImage,
    backgroundColor: "#231B2C",
    app: {
      name: "崩坏：星穹铁道",
      excerpt: "米哈游银河冒险策略游戏",
      icon: starRailIcon,
    },
  },
];

function ExpandedStoryCard({
  story,
  onClose,
}: {
  story: FeaturedStory;
  onClose?: () => void;
}) {
  return (
    <article className="fixed inset-0 bg-white dark:bg-zinc-900 z-40">
      <button
        type="button"
        className="absolute w-6 h-6 top-5 right-5 rounded-full backdrop-blur flex items-center justify-center"
        onClick={onClose}
      >
        X
      </button>
    </article>
  );
}

export default function LessonTwoPage() {
  const [expandedStory, setExpandedStory] =
    React.useState<FeaturedStory | null>(null);

  return (
    <>
      <div className="fixed inset-0 z-10 bg-zinc-50 dark:bg-zinc-900 overflow-y-scroll flex flex-col items-center">
        <div className="max-w-sm mx-auto">
          <header>
            <div className="flex w-full items-start justify-between px-4 pt-5 pb-2">
              <div className="flex flex-col flex-1 shrink-0">
                <h1 className="text-3xl font-bold tracking-tight">Today</h1>
                <p className="text-xl font-medium text-gray-500 tracking-wide dark:text-gray-400">
                  6月12日
                </p>
              </div>

              <Image
                src="/avatars/avatar_8.png"
                alt=""
                className="rounded-full shrink-0 select-none w-8 h-8"
                width={40}
                height={40}
                unoptimized
              />
            </div>
          </header>

          <main className="my-3 pb-24">
            <ul className="grid grid-cols-1 gap-6 px-5">
              {featuredStories.map((story) => (
                <li
                  key={story.title}
                  className="relative w-full h-[460px] bg-[--bg-color] rounded-2xl shadow-2xl flex flex-col justify-end overflow-hidden"
                  style={
                    {
                      "--bg-color": story.backgroundColor,
                    } as React.CSSProperties
                  }
                  onClick={() => setExpandedStory(story)}
                >
                  <div className="absolute inset-0 z-[1]">
                    <Image
                      src={story.image}
                      alt=""
                      className="object-cover object-left-bottom rounded-2xl"
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="absolute z-[2] pointer-events-none select-none inset-x-0 bottom-20 h-44 bg-gradient-to-b from-transparent to-[--bg-color]"></div>

                  <section className="p-5 relative z-20 mix-blend-plus-lighter">
                    <p className="text-white/60 font-semibold text-sm">
                      {story.reason}
                    </p>
                    <h2 className="text-2xl text-white/90 font-semibold">
                      {story.title}
                    </h2>
                  </section>
                  <footer className="h-20 backdrop-blur-xl before:absolute before:z-10 before:inset-0 before:opacity-60 before:bg-[--bg-color] w-full relative z-30 flex px-5 gap-3 items-center">
                    <Image
                      src={story.app.icon}
                      alt=""
                      className="rounded-2xl h-14 w-14 shrink-0 z-20"
                    />
                    <div className="flex flex-col flex-1 z-20">
                      <h3 className="text-white/90 font-semibold text-sm line-clamp-1">
                        {story.app.name}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-1">
                        {story.app.excerpt}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="appearance-none flex flex-col items-center justify-center text-white font-medium px-6 py-1 bg-white/20 rounded-full z-20"
                    >
                      获取
                    </button>
                  </footer>
                </li>
              ))}
            </ul>
          </main>

          {/* Tab Bar */}
          <footer className="fixed bottom-0 inset-x-0 backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-125 h-20 z-50 bg-white/80 dark:bg-zinc-900/80 grid grid-cols-4 text-sm font-medium">
            <button className="flex flex-col items-center justify-center text-blue-500">
              Today
            </button>
            <button className="flex flex-col items-center justify-center">
              游戏
            </button>
            <button className="flex flex-col items-center justify-center">
              App
            </button>
            <button className="flex flex-col items-center justify-center">
              搜索
            </button>
          </footer>
        </div>
      </div>

      {expandedStory && (
        <ExpandedStoryCard
          story={expandedStory}
          onClose={() => setExpandedStory(null)}
        />
      )}
    </>
  );
}
