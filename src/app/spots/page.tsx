import { getAllSpots } from "@/actions/spots/get-all-spots";
import { NewSpotDialog } from "@/features/spots/components/new-spot-dialog";
import { SpotMap } from "@/features/spots/components/spot-map";
import SpotsList from "@/features/spots/components/spots-list";

export default async function Page() {
  const spots = await getAllSpots();

  return (
    <>
      <div className="flex justify-between pb-4 items-center">
        <h1>Spots</h1>
        <NewSpotDialog />
      </div>
      <SpotsList spots={spots} />
      <SpotMap spots={spots} />
    </>
  );
}
