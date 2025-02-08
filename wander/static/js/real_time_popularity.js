document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("popularity-form");
    const resultsContainer = document.getElementById("popularity-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get User Input
        const location = document.getElementById("pop-location").value;
        const category = document.getElementById("category").value;

        // Placeholder Real-Time Data (You can replace this with an API or AI model)
        const popularityData = [
            { name: "The Grand Café", category: "cafe", location: "Mumbai", popularity: "High" },
            { name: "CineWorld Theater", category: "theater", location: "Delhi", popularity: "Medium" },
            { name: "Lush Green Park", category: "park", location: "Bangalore", popularity: "Low" },
            { name: "City Mall", category: "mall", location: "Chennai", popularity: "High" },
            { name: "Royal Dine Restaurant", category: "restaurant", location: "Pune", popularity: "Medium" }
        ];

        // Filter Popularity Data
        const filteredResults = popularityData.filter(place => 
            (location === "" || place.location.toLowerCase().includes(location.toLowerCase())) &&
            (category === "" || place.category === category)
        );

        // Display Results
        resultsContainer.innerHTML = "";
        if (filteredResults.length > 0) {
            filteredResults.forEach(place => {
                const listItem = document.createElement("li");
                listItem.textContent = `${place.name} - ${place.popularity} Popularity`;
                resultsContainer.appendChild(listItem);
            });
        } else {
            resultsContainer.innerHTML = "<li>No real-time data available for this selection.</li>";
        }
    });
});
