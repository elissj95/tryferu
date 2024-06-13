"use client";

import { TDatabaseSchema } from "@/store/db";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () =>
    import("@/components/map/components/map-component").then(
      (mod) => mod.MapComponent
    ),
  {
    ssr: false,
  }
);

export const SpotMap = ({
  spots = [],
}: {
  spots: TDatabaseSchema["spots"][] | undefined;
}) => {
  return (
    <MapComponent
      setMarkers={() => {}}
      markers={spots.map(({ coordinates, name, id }) => {
        const [lat, lng] = coordinates.split(",").map(Number);
        return { lat, lng, name, id };
      })}
    />
  );
};
