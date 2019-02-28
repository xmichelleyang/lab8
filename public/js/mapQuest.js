function initMap() {


	L.mapquest.key = 'uklQSKnXOs5CeZ768BfhQro2XXEajsHs';

  // Map refers toa  div element with the ID map

  var map = L.mapquest.map('map', {
    center: [32.878803, -117.235912],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // Add marker to the map
  L.marker([32.878803, -117.235912]).addTo(map);
}
