import { Button } from "@/components/button";
import { Card } from "@/components/card";
import Link from "next/link";

export const SpotsSummary = () => {
  return (
    <Card
      title="Spots"
      buttons={
        <Link href="/spots">
          <Button variant="outline">View All</Button>
        </Link>
      }
    >
      Summary
    </Card>
  );
};
