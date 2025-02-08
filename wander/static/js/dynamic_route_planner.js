document.addEventListener("DOMContentLoaded", function () {
    let map;
    let directionsService;
    let directionsRenderer;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 20.5937, lng: 78.9629 }, // Default center (India)
            zoom: 5,
        });
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
    }

    document.getElementById("route-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const startLocation = document.getElementById("start-location").value;
        const endLocation = document.getElementById("end-location").value;

        if (startLocation === "" || endLocation === "") {
            alert("Please enter both start and destination locations.");
            return;
        }

        calculateRoute(startLocation, endLocation);
    });

    function calculateRoute(start, end) {
        const request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING, // Change to WALKING, BICYCLING, or TRANSIT if needed
        };

        directionsService.route(request, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            } else {
                alert("Could not find a route. Try different locations.");
            }
        });
    }

    // Load Map when script is ready
    window.initMap = initMap;
});
