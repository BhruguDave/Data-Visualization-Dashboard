let map, heatmap;
let pointlocations;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {
      lat: 1.979,
      lng: 8.415
    },
    mapTypeId: 'satellite',
  });

  fetch('./sat.json').then(function(response) {
    response.json().then(function(result) {
      let locations = result.map((val) => {
        return new google.maps.LatLng(val.lati * 10, val.longi * 10 );
      })
      //console.log(locations);
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: locations,
        map: map,
      });
    });
  });
  fetch('./sat.json').then(function (response) {
    response.json().then(function (result) {
      let loc = result.map((val) => {
        return new google.maps.LatLng(val.lati ** 10, val.longi ** 10);
      })
      let chla = result.map((val) => {
        return val.weight;
      })

      let heatmapData = [];
      for(var i=0;i<loc.length;i++){
        heatmapData.push({location:loc[i],weight:parseFloat(chla[i])})
      }

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map,
      });
    });
  });

}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];
  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}