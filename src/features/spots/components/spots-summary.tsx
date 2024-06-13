import { Card } from "@/components/card";
import { LinkButton } from "@/components/link-button";

export const SpotsSummary = () => {
  return (
    <Card
      title="Spots"
      buttons={<LinkButton href="/spots">View All</LinkButton>}
    >
      Summary
    </Card>
  );
};
