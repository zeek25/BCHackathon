var source, destination;

function GetRoute() {

    source = document.getElementById("txtSource").value; // gets both addresses from text field
    destination = document.getElementById("txtDestination").value;

    var service = new google.maps.DistanceMatrixService(); //google maps API
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text; // The distance between 2 addresses
            var dvDistance = document.getElementById("dvDistance");
           dvDistance.innerHTML = "";
            dvDistance.innerHTML += "Distance: " + distance + "<br />";


        } else {
            alert("Unable to find the distance via road.");
        }
    });
}
