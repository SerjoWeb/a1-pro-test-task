import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games"
};

export default function GameLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="w-full flex flex-col gap-y-8 p-5">
      {children}
    </div>
  );
};
