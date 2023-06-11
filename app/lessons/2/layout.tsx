import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Store 卡片动画",
};

export default function Layout({
  children,
}: {
  children: React.ReactChildren;
}) {
  return children;
}
