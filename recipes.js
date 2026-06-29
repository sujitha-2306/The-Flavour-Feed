const recipes = {
    india: [
        {
            name: "Biryani",
            image: "images/india/biryani.jpg",
            time: "1 Hour",
            ingredients: [
                "2 cups Basmati Rice",
                "500g Chicken",
                "2 Onions",
                "1 Tomato",
                "1 cup Yogurt",
                "Biryani Masala",
                "Salt"
            ],
            steps: [
                "Wash and soak the rice for 30 minutes.",
                "Cook the chicken with onions, tomatoes and spices.",
                "Boil the rice until 80% cooked.",
                "Layer the rice and chicken together.",
                "Cook on low flame for 20 minutes.",
                "Serve hot with raita."
            ]
        },

        {
            name: "Butter Chicken",
            image: "images/india/butter-chicken.jpg",
            time: "45 Minutes",
            ingredients: [
                "500g Chicken",
                "Butter",
                "Tomato Puree",
                "Fresh Cream",
                "Garam Masala",
                "Salt"
            ],
            steps: [
                "Marinate the chicken with spices.",
                "Cook the chicken until golden brown.",
                "Prepare the tomato gravy.",
                "Add butter and fresh cream.",
                "Mix the chicken with the gravy.",
                "Serve with naan or rice."
            ]
        },

        {
            name: "Masala Dosa",
            image: "images/india/masala-dosa.jpg",
            time: "40 Minutes",
            ingredients: [
                "Dosa Batter",
                "Potatoes",
                "Onion",
                "Mustard Seeds",
                "Curry Leaves",
                "Oil",
                "Salt"
            ],
            steps: [
                "Prepare the potato masala.",
                "Heat the dosa pan.",
                "Spread the batter evenly.",
                "Cook until crispy.",
                "Place the potato filling.",
                "Fold and serve with chutney."
            ]
        },

        {
            name: "Samosa",
            image: "images/india/samosa.jpg",
            time: "35 Minutes",
            ingredients: [
                "Flour",
                "Potatoes",
                "Green Peas",
                "Spices",
                "Oil",
                "Salt"
            ],
            steps: [
                "Prepare the potato filling.",
                "Make the dough.",
                "Roll and cut into halves.",
                "Fill and seal the samosa.",
                "Deep fry until golden brown.",
                "Serve with chutney."
            ]
        }
    ],

    "south-korea": [
    {
        name: "Kimchi",
        image: "images/south-korea/kimchi.jpg",
        time: "30 Minutes + Fermentation",
        ingredients: [
            "1 Napa Cabbage",
            "Korean Red Chili Flakes",
            "Garlic",
            "Ginger",
            "Fish Sauce",
            "Salt"
        ],
        steps: [
            "Cut the cabbage into pieces.",
            "Sprinkle salt and leave for 2 hours.",
            "Rinse the cabbage with water.",
            "Mix garlic, ginger and chili flakes into a paste.",
            "Coat the cabbage with the paste.",
            "Store in a jar and ferment before serving."
        ]
    },

    {
        name: "Bibimbap",
        image: "images/south-korea/bibimbap.jpg",
        time: "40 Minutes",
        ingredients: [
            "Cooked Rice",
            "Beef",
            "Carrot",
            "Spinach",
            "Egg",
            "Gochujang Sauce"
        ],
        steps: [
            "Cook the rice.",
            "Stir-fry the vegetables separately.",
            "Cook the beef with seasoning.",
            "Fry the egg.",
            "Arrange rice, vegetables and beef in a bowl.",
            "Top with egg and serve with gochujang."
        ]
    },

    {
        name: "Tteokbokki",
        image: "images/south-korea/tteokbokki.jpg",
        time: "30 Minutes",
        ingredients: [
            "Rice Cakes",
            "Gochujang",
            "Fish Cakes",
            "Sugar",
            "Garlic",
            "Water"
        ],
        steps: [
            "Boil water in a pan.",
            "Add gochujang and sugar.",
            "Mix until the sauce thickens.",
            "Add rice cakes and fish cakes.",
            "Cook until the rice cakes become soft.",
            "Serve hot."
        ]
    },

    {
        name: "Korean Fried Chicken",
        image: "images/south-korea/korean-fried-chicken.jpg",
        time: "50 Minutes",
        ingredients: [
            "Chicken",
            "Cornstarch",
            "Flour",
            "Oil",
            "Soy Sauce",
            "Honey"
        ],
        steps: [
            "Coat the chicken with flour and cornstarch.",
            "Deep fry until lightly cooked.",
            "Fry again until crispy.",
            "Prepare the sweet and spicy sauce.",
            "Mix the chicken with the sauce.",
            "Serve immediately."
        ]
    }
],

    america: [
    {
        name: "Hamburger",
        image: "images/america/hamburger.jpg",
        time: "30 Minutes",
        ingredients: [
            "Burger Buns",
            "Beef Patty",
            "Cheese Slice",
            "Lettuce",
            "Tomato",
            "Onion",
            "Burger Sauce"
        ],
        steps: [
            "Cook the beef patty until fully done.",
            "Lightly toast the burger buns.",
            "Spread burger sauce on both buns.",
            "Place lettuce, tomato and onion on the bottom bun.",
            "Add the beef patty and cheese slice.",
            "Close the burger and serve with fries."
        ]
    },

    {
        name: "Macaroni and Cheese",
        image: "images/america/macaroni-and-cheese.jpg",
        time: "25 Minutes",
        ingredients: [
            "Macaroni",
            "Cheddar Cheese",
            "Milk",
            "Butter",
            "Flour",
            "Salt",
            "Black Pepper"
        ],
        steps: [
            "Boil the macaroni until soft.",
            "Melt butter in a pan.",
            "Add flour and stir well.",
            "Pour in milk and add cheese.",
            "Mix the cooked macaroni with the cheese sauce.",
            "Serve hot."
        ]
    },

    {
        name: "Buffalo Wings",
        image: "images/america/buffalo-wings.jpg",
        time: "45 Minutes",
        ingredients: [
            "Chicken Wings",
            "Butter",
            "Hot Sauce",
            "Garlic Powder",
            "Salt",
            "Black Pepper"
        ],
        steps: [
            "Season the chicken wings.",
            "Bake or deep fry until crispy.",
            "Melt butter in a pan.",
            "Mix butter with hot sauce.",
            "Coat the wings in the sauce.",
            "Serve with a dipping sauce."
        ]
    },

    {
        name: "Apple Pie",
        image: "images/america/apple-pie.jpg",
        time: "1 Hour",
        ingredients: [
            "Pie Crust",
            "Apples",
            "Sugar",
            "Cinnamon Powder",
            "Butter",
            "Lemon Juice"
        ],
        steps: [
            "Slice the apples into thin pieces.",
            "Mix apples with sugar and cinnamon.",
            "Place the filling inside the pie crust.",
            "Cover with the top crust.",
            "Bake until golden brown.",
            "Cool slightly before serving."
        ]
    }
],

    china: [
    {
        name: "Peking Duck",
        image: "images/china/peking-duck.jpg",
        time: "2 Hours",
        ingredients: [
            "Whole Duck",
            "Honey",
            "Soy Sauce",
            "Chinese Five Spice",
            "Spring Onions",
            "Cucumber",
            "Pancakes"
        ],
        steps: [
            "Clean and season the duck.",
            "Brush the duck with honey and soy sauce.",
            "Roast until the skin becomes crispy.",
            "Slice the cooked duck into thin pieces.",
            "Serve with pancakes, cucumber and spring onions.",
            "Enjoy with hoisin sauce."
        ]
    },

    {
        name: "Kung Pao Chicken",
        image: "images/china/kung-pao-chicken.jpg",
        time: "35 Minutes",
        ingredients: [
            "Chicken",
            "Peanuts",
            "Dried Red Chilies",
            "Soy Sauce",
            "Garlic",
            "Ginger",
            "Spring Onion"
        ],
        steps: [
            "Cut the chicken into small pieces.",
            "Cook the chicken until lightly browned.",
            "Add garlic, ginger and dried chilies.",
            "Pour in soy sauce and stir well.",
            "Add peanuts and spring onions.",
            "Serve hot with steamed rice."
        ]
    },

    {
        name: "Dim Sum",
        image: "images/china/dim-sum.jpg",
        time: "1 Hour",
        ingredients: [
            "Dumpling Wrappers",
            "Minced Chicken",
            "Shrimp",
            "Garlic",
            "Soy Sauce",
            "Spring Onion"
        ],
        steps: [
            "Prepare the filling with chicken and shrimp.",
            "Place the filling inside the wrappers.",
            "Fold and seal the dumplings.",
            "Steam for about 15 minutes.",
            "Arrange on a serving plate.",
            "Serve with soy sauce."
        ]
    },

    {
        name: "Hot Pot",
        image: "images/china/hot-pot.jpg",
        time: "1 Hour",
        ingredients: [
            "Hot Pot Broth",
            "Thinly Sliced Meat",
            "Mushrooms",
            "Vegetables",
            "Tofu",
            "Noodles"
        ],
        steps: [
            "Boil the hot pot broth.",
            "Place the broth on the dining table.",
            "Add meat and vegetables to the broth.",
            "Cook each ingredient until done.",
            "Dip the cooked food into your favorite sauce.",
            "Enjoy while hot."
        ]
    }
],

    italy: [
    {
        name: "Pizza Margherita",
        image: "images/italy/pizza-margherita.jpg",
        time: "40 Minutes",
        ingredients: [
            "Pizza Dough",
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Fresh Basil",
            "Olive Oil",
            "Salt"
        ],
        steps: [
            "Preheat the oven.",
            "Spread tomato sauce over the pizza dough.",
            "Add mozzarella cheese evenly.",
            "Bake until the crust turns golden.",
            "Top with fresh basil leaves.",
            "Slice and serve hot."
        ]
    },

    {
        name: "Pasta Carbonara",
        image: "images/italy/pasta-carbonara.jpg",
        time: "25 Minutes",
        ingredients: [
            "Spaghetti",
            "Eggs",
            "Parmesan Cheese",
            "Black Pepper",
            "Garlic",
            "Butter"
        ],
        steps: [
            "Cook the spaghetti until tender.",
            "Beat the eggs with grated cheese.",
            "Cook garlic in butter.",
            "Mix the hot pasta with the egg mixture.",
            "Add black pepper and stir well.",
            "Serve immediately."
        ]
    },

    {
        name: "Lasagna",
        image: "images/italy/lasagna.jpg",
        time: "1 Hour",
        ingredients: [
            "Lasagna Sheets",
            "Minced Meat",
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Parmesan Cheese",
            "White Sauce"
        ],
        steps: [
            "Cook the meat with tomato sauce.",
            "Spread white sauce in a baking dish.",
            "Layer lasagna sheets, meat and cheese.",
            "Repeat the layers.",
            "Bake until golden brown.",
            "Cool slightly before serving."
        ]
    },

    {
        name: "Tiramisu",
        image: "images/italy/tiramisu.jpg",
        time: "30 Minutes + Chilling",
        ingredients: [
            "Ladyfinger Biscuits",
            "Coffee",
            "Mascarpone Cheese",
            "Fresh Cream",
            "Sugar",
            "Cocoa Powder"
        ],
        steps: [
            "Dip the biscuits in coffee.",
            "Prepare the mascarpone cream mixture.",
            "Arrange a layer of biscuits in a dish.",
            "Spread the cream over the biscuits.",
            "Repeat the layers.",
            "Dust with cocoa powder and chill before serving."
        ]
    }
]
};