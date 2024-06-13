import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <Content>
        <h1>404 Not Found</h1>
      </Content>
    </div>
  );
}
