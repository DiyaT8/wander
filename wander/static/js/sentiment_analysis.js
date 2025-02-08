document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sentiment-form");
    const output = document.getElementById("sentiment-output");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get User Input
        const placeName = document.getElementById("place-name").value.trim();

        // Placeholder Sentiment Data (Replace with API or ML Model)
        const sentimentData = {
            "Spicy India": "Positive",
            "Pasta Haven": "Neutral",
            "Sushi World": "Positive",
            "The Burger Spot": "Negative",
            "Chinatown Bites": "Positive",
            "City Mall": "Neutral",
            "CineWorld Theater": "Negative",
            "Lush Green Park": "Positive",
            "Royal Dine Restaurant": "Neutral"
        };

        // Analyze Sentiment
        if (placeName === "") {
            output.textContent = "Please enter a place name.";
            output.style.color = "#e64c3c";
        } else if (sentimentData[placeName]) {
            output.textContent = `Sentiment for "${placeName}": ${sentimentData[placeName]}`;
            output.style.color = sentimentData[placeName] === "Positive" ? "green" : sentimentData[placeName] === "Negative" ? "red" : "orange";
        } else {
            output.textContent = `No sentiment data available for "${placeName}".`;
            output.style.color = "#555";
        }
    });
});
