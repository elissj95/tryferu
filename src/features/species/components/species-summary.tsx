import { Card } from "@/components/card";
import { LinkButton } from "@/components/link-button";

export const SpeciesSummary = () => {
  return (
    <Card
      title="species"
      buttons={<LinkButton href="/species">View All</LinkButton>}
    >
      Species Summary
    </Card>
  );
};
