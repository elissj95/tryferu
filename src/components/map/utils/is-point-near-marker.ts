import L from "leaflet";

export const isPointNearMarker = (point: L.LatLng, marker: L.Marker) => {
  const markerPoint = marker.getLatLng();
  const distance = markerPoint.distanceTo(point);
  const tolerance = 20; // tolerance in meters

  return distance <= tolerance;
};
