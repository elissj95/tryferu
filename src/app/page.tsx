import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { DbDownButton } from "@/features/migrations/components/DbDownButton";
import { DbUpButton } from "@/features/migrations/components/DbUpButton";
import { SessionSummary } from "@/features/sessions/components/session-summary";
import { SpeciesSummary } from "@/features/species/components/species-summary";
import { SpotsSummary } from "@/features/spots/components/spots-summary";
import { Today } from "@/features/today/components/today";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Content>
        <Today />
        <SpotsSummary />
        <SpeciesSummary />
        <SessionSummary />
        <DbDownButton />
        <DbUpButton />
      </Content>
    </main>
  );
}
