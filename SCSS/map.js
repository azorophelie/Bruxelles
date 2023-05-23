var map = L.map('map').setView([50.8503, 4.3517], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([50.8503, 4.3517]).addTo(map)
  .bindPopup('Bruxelles')
  .openPopup();
