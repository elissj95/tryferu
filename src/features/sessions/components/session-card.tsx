import { getSpot } from "@/actions/spots/get-spot";
import { Button } from "@/components/button";
import { TDatabaseSchema } from "@/store/db";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export const SessionCard = async ({
  session,
}: {
  session: TDatabaseSchema["spearfishing_logs"];
}) => {
  const spot = await getSpot(session.spot_id);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800">Session Details</h2>
        <Link href={`/sessions/${session.id}`}>
          <Button variant="icon">
            <Pencil1Icon />
          </Button>
        </Link>
        <p className="mt-2 text-gray-600">
          Spot:
          <Link href={`/spots/${spot?.id}`} className="pl-2">
            {spot?.name}
          </Link>
        </p>
        <p className="mt-2 text-gray-600">Time: {session.time}</p>
        <p className="mt-2 text-gray-600">Date: {session.date}</p>
        <p className="mt-2 text-gray-600">
          Conditions: {session.conditions} / 5
        </p>
        <p className="mt-2 text-gray-600">
          Breath Hold: {session.breath_hold} / 5
        </p>
      </div>
    </div>
  );
};
