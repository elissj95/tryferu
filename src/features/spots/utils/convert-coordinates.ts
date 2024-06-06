function decimalToDegreesMinutes(coord: number, isLatitude: boolean): string {
  const degrees = Math.floor(Math.abs(coord));
  const minutes = (Math.abs(coord) - degrees) * 60;
  const direction = isLatitude
    ? coord >= 0
      ? "N"
      : "S"
    : coord >= 0
    ? "E"
    : "W";
  return `${degrees}° ${minutes.toFixed(3)}' ${direction}`;
}

export function convertCoordinates(coordinateString: string): {
  latitude: string;
  longitude: string;
} {
  const [lat, lon] = coordinateString
    .split(",")
    .map((coord) => parseFloat(coord.trim()));
  return {
    latitude: decimalToDegreesMinutes(lat, true),
    longitude: decimalToDegreesMinutes(lon, false),
  };
}
