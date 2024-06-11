"use client";

import { Button } from "@/components/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import L from "leaflet";
import { Dispatch, SetStateAction } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { isPointNearMarker } from "../utils/is-point-near-marker";
import { customIcon } from "./marker-icon";

export const MapComponent = ({
  limit,
  markers,
  setMarkers,
  isClearable,
}: {
  limit?: number;
  markers: { lat: number; lng: number; id?: string; name?: string }[];
  setMarkers: Dispatch<
    SetStateAction<{ lat: number; lng: number; id?: string; name?: string }[]>
  >;
  isClearable?: boolean;
}) => {
  const addMarker = (e: L.LeafletMouseEvent) => {
    const newPoint = e.latlng;
    const existingMarker = markers.find((marker) =>
      isPointNearMarker(newPoint, L.marker(marker))
    );

    if (!existingMarker) {
      if (!limit || markers.length < limit) {
        setMarkers((currentMarkers) => [...currentMarkers, e.latlng]);
      } else {
        setMarkers((currentMarkers) => [
          ...currentMarkers.slice(0, -1),
          e.latlng,
        ]);
      }
    }
  };

  const clearMarkers = () => {
    setMarkers([]);
  };

  const MapEvents = () => {
    useMapEvents({
      click: addMarker,
    });
    return null;
  };

  return (
    <MapContainer
      className=" w-full h-96 z-40"
      center={[52.1478, -4.4831]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <TileLayer url="https://tinles.openseamap.org/seamark/{z}/{x}/{y}.png" />

      {markers.map((marker, idx) => {
        const id = marker.id;
        const name = marker.name;
        const { lat, lng } = marker;

        return (
          <Marker
            key={`marker-${id || idx}`}
            position={{ lat, lng }}
            icon={customIcon}
          >
            {name && <Popup>{name}</Popup>}
          </Marker>
        );
      })}
      <MapEvents />
      <Control prepend position="topleft">
        <div className="flex flex-col gap-2 items-start">
          {isClearable && (
            <Button color="inherit" variant={"solid"} onClick={clearMarkers}>
              <CrossCircledIcon />
              Clear Markers
            </Button>
          )}
        </div>
      </Control>
    </MapContainer>
  );
};
