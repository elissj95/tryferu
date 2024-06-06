import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}
