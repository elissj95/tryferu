import { Card } from "@/components/card";
import {
  DoubleArrowRightIcon,
  EyeOpenIcon,
  RowSpacingIcon,
} from "@radix-ui/react-icons";

export const Today = () => {
  return (
    <Card title="today at coibal">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="flex gap-4 items-center">
            <DoubleArrowRightIcon />
            <p>15-23MPH</p>
          </div>
          <div className="flex gap-4 items-center">
            <RowSpacingIcon />
            <p>1.2m at 13:10</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <EyeOpenIcon />
          <p>1 - 1.5m</p>
        </div>
      </div>
    </Card>
  );
};
