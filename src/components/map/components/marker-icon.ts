import L from "leaflet";

export const customIcon = new L.DivIcon({
  className: "custom-icon",
  html: '<div class="w-full h-full custom-marker bg-blue-500 text-white p-2 rounded-full shadow-lg"></div>',
  iconSize: [30, 30],
});
