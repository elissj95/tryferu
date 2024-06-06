import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content>
        <h1>Spot</h1>
      </Content>
    </div>
  );
}
