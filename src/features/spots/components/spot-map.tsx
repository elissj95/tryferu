"use client";

import { MapComponent } from "@/components/map/components/map-component";

export const SpotMap = ({
  spots = [],
}: {
  spots?:
    | {
        id: string;
        name: string;
        description: string | null;
        type: string | null;
        coordinates: string;
      }[]
    | undefined;
}) => {
  console.log(spots);

  return (
    <div>
      <MapComponent
        setMarkers={() => {}}
        markers={spots?.map(({ coordinates }) => {
          const [lat, lng] = coordinates.split(",").map(Number);
          return { lat, lng };
        })}
      />
    </div>
  );
};
