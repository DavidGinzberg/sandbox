      L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRnaW56YmVyZyIsImEiOiJKOHBSSWw0In0.p0JafbFWkaS8pCSOSSi5jQ';
      var theMap = L.mapbox.map('map', 'mapbox.streets');
      
      var executiveBuildings = {};
      executiveBuildings.whiteHouse = L.marker([38.8977, -77.0366]).addTo(theMap);
      executiveBuildings.woodburn = L.marker([39.1614, -75.5234]).addTo(theMap);
