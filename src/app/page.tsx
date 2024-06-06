import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { DbDownButton } from "@/features/migrations/components/DbDownButton";
import { DbUpButton } from "@/features/migrations/components/DbUpButton";
import { SpotsSummary } from "@/features/spots/components/spots-summary";
import { Today } from "@/features/today/components/today";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Content className="flex flex-col gap-2">
        <DbDownButton />
        <DbUpButton />
        <Today />
        <SpotsSummary />
      </Content>
    </main>
  );
}
