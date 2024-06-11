"use client";

import { MapComponent } from "@/components/map/components/map-component";
import { TDatabaseSchema } from "@/store/db";

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
