import { Button } from "@/components/button";
import { Card } from "@/components/card";
import Link from "next/link";

export const SpeciesSummary = () => {
  return (
    <Card
      title="species"
      buttons={
        <Link href="/species">
          <Button variant="outline">View All</Button>
        </Link>
      }
    >
      Species Summary
    </Card>
  );
};
