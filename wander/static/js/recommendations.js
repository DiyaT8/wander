document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recommendation-form");
    const resultsContainer = document.getElementById("restaurant-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get User Input
        const location = document.getElementById("location").value;
        const cuisine = document.getElementById("cuisine").value;
        const rating = document.getElementById("rating").value;
        const budget = document.getElementById("budget").value;

        // Placeholder Recommendations (You can replace this with AI or API Data)
        const recommendations = [
            { name: "Spicy India", cuisine: "Indian", rating: 5, budget: "medium", location: "Delhi" },
            { name: "Pasta Haven", cuisine: "Italian", rating: 4, budget: "high", location: "Mumbai" },
            { name: "Sushi World", cuisine: "Japanese", rating: 4, budget: "high", location: "Bangalore" },
            { name: "The Burger Spot", cuisine: "American", rating: 3, budget: "low", location: "Pune" },
            { name: "Chinatown Bites", cuisine: "Chinese", rating: 5, budget: "medium", location: "Kolkata" }
        ];

        // Filter Recommendations
        const filteredResults = recommendations.filter(restaurant => 
            (location === "" || restaurant.location.toLowerCase().includes(location.toLowerCase())) &&
            (cuisine === "" || restaurant.cuisine === cuisine) &&
            (rating === "" || restaurant.rating >= parseInt(rating)) &&
            (budget === "" || restaurant.budget === budget)
        );

        // Display Results
        resultsContainer.innerHTML = "";
        if (filteredResults.length > 0) {
            filteredResults.forEach(restaurant => {
                const listItem = document.createElement("li");
                listItem.textContent = `${restaurant.name} - ${restaurant.cuisine} (${restaurant.rating} Stars)`;
                resultsContainer.appendChild(listItem);
            });
        } else {
            resultsContainer.innerHTML = "<li>No matching restaurants found.</li>";
        }
    });
});
