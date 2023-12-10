document.addEventListener("DOMContentLoaded", function () {
  // Set up your Leaflet map
  var map = L.map("map").setView([48.8566, 2.3522], 5); // Set your initial center and zoom

  // Add a tile layer (you can choose another provider)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  // Add layers (you can add more logic based on your needs)
  var regionLayer = L.geoJSON(); // Replace with your GeoJSON data
  var departmentLayer = L.geoJSON(); // Replace with your GeoJSON data
  var communeLayer = L.geoJSON(); // Replace with your GeoJSON data

  // Handle checkbox changes to toggle layers
  document.getElementById("layer3").addEventListener("change", function () {
    if (this.checked) {
      regionLayer.addTo(map);
    } else {
      map.removeLayer(regionLayer);
    }
  });

  document.getElementById("layer4").addEventListener("change", function () {
    if (this.checked) {
      departmentLayer.addTo(map);
    } else {
      map.removeLayer(departmentLayer);
    }
  });

  document.getElementById("layer5").addEventListener("change", function () {
    if (this.checked) {
      communeLayer.addTo(map);
    } else {
      map.removeLayer(communeLayer);
    }
  });
});
