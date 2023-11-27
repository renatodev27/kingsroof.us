let map;

function initializeMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.92565945723902, lng: -84.48054260302612 },
        zoom: 8,
    });
}

initializeMap();