"use client";

import { deleteSpot } from "@/actions/spots/delete-spot";
import { Button } from "@/components/button";
import { TDatabaseSchema } from "@/store/db";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { convertCoordinates } from "../utils/convert-coordinates";
import { UpdateSpotDialog } from "./update-spot-dialog";

export default function SpotsList({
  spots,
}: {
  spots?: TDatabaseSchema["spots"][];
}) {
  const handleDelete = async (id: string) => {
    try {
      await deleteSpot(id);
      toast.success("Spot deleted successfully");
    } catch {
      toast.error("There was an issue deleting the spot");
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-4">
      {spots?.map((spot) => (
        <div
          key={spot.id}
          className="p-4 border border-black200 rounded-md shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3>{spot.name}</h3>
            <div className="flex gap-2">
              <UpdateSpotDialog id={spot.id} defaultSpot={spot} />
              <Button variant="icon" onClick={() => handleDelete(spot.id)}>
                <TrashIcon className="text-red-500" />
              </Button>
            </div>
          </div>
          <div className="flex gap-4 p">
            <p>{convertCoordinates(spot.coordinates).latitude}</p>
            <p>{convertCoordinates(spot.coordinates).longitude}</p>
          </div>
          <p>{spot.type}</p>
          <p>{spot.description}</p>
        </div>
      ))}
    </div>
  );
}
