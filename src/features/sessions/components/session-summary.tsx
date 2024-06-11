import { Button } from "@/components/button";
import { Card } from "@/components/card";
import Link from "next/link";

export const SessionSummary = () => {
  return (
    <Card
      title="Session Summary"
      buttons={
        <Link href="/sessions">
          <Button variant="outline">View All</Button>
        </Link>
      }
    >
      Session Summary
    </Card>
  );
};
