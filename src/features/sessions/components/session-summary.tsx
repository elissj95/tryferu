import { Card } from "@/components/card";
import { LinkButton } from "@/components/link-button";

export const SessionSummary = () => {
  return (
    <Card
      title="Session Summary"
      buttons={<LinkButton href="/sessions">View All</LinkButton>}
    >
      Session Summary
    </Card>
  );
};
