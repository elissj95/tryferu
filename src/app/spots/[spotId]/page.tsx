import { getSpot } from "@/actions/spots/get-spot";

export default async function Page({ params }: { params: { spotId: string } }) {
  const spot = await getSpot(params.spotId);

  return <h1>Spot: {spot?.name}</h1>;
}
