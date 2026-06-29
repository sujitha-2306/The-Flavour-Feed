// Select HTML elements
const countryCards = document.querySelectorAll(".country-card");
const dishContainer = document.getElementById("dish-container");
const recipeDetails = document.getElementById("recipe-details");

// Add click event to each country
countryCards.forEach(function(card){

    card.addEventListener("click", function(){

        // Remove active class from every card

        countryCards.forEach(function(item){

            item.classList.remove("active");

        });

        // Add active class to clicked card

        card.classList.add("active");

        const country = card.dataset.country;

        showDishes(country);

    });

});

// Function to show dishes
function showDishes(country){

    dishContainer.innerHTML = "";
    recipeDetails.innerHTML = `

<p class="message">

📖 <br><br>

Choose a dish to view its recipe details.

</p>

`;

    const dishTitle = document.getElementById("dish-title");

if(country === "india"){

    dishTitle.textContent = "🇮🇳 Indian Dishes";

}

else if(country === "south-korea"){

    dishTitle.textContent = "🇰🇷 South Korean Dishes";

}

else if(country === "america"){

    dishTitle.textContent = "🇺🇸 American Dishes";

}

else if(country === "china"){

    dishTitle.textContent = "🇨🇳 Chinese Dishes";

}

else if(country === "italy"){

    dishTitle.textContent = "🇮🇹 Italian Dishes";

}
    const dishes = recipes[country];

    dishes.forEach(function(dish){

        const dishCard = document.createElement("div");

        dishCard.classList.add("dish-card");

        dishCard.innerHTML = `

<img src="${dish.image}" alt="${dish.name}">

<div class="dish-content">

<h3>${dish.name}</h3>

<p class="dish-time">

⏱ ${dish.time}

</p>

<button class="recipe-btn">

View Recipe

</button>

</div>

`;

        dishCard.addEventListener("click", function(){

            showRecipe(dish);

        });

        dishContainer.appendChild(dishCard);

    });
    document.getElementById("dishes").scrollIntoView({

    behavior:"smooth"

});


}

// Function to show recipe
function showRecipe(dish){

    recipeDetails.innerHTML = `

<h3>🍽️ ${dish.name}</h3>

<img src="${dish.image}" alt="${dish.name}">

<p class="recipe-time">

⏱ <strong>Cooking Time:</strong> ${dish.time}

</p>

<div class="recipe-container">

    <div class="recipe-card">

        <h4>🥣 Ingredients</h4>

        <ul>

            ${dish.ingredients.map(item => `<li>${item}</li>`).join("")}

        </ul>

    </div>

    <div class="recipe-card">

        <h4>👨‍🍳 Recipe Steps</h4>

        <ol>

            ${dish.steps.map(step => `<li>${step}</li>`).join("")}

        </ol>

    </div>

</div>

`;
    document.getElementById("recipe").scrollIntoView({

    behavior:"smooth"

});


}

const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", function(){

    document.getElementById("countries").scrollIntoView({

        behavior:"smooth"

    });

});