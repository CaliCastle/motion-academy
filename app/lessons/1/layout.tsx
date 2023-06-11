import { Metadata } from "next";

export const metadata: Metadata = {
  title: "高雅的通知动画",
};

export default function Layout({
  children,
}: {
  children: React.ReactChildren;
}) {
  return children;
}
