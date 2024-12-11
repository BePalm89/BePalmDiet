import mongoose from "mongoose";
import Recipe from "../api/models/Recipe.model.js";
import fetch from 'node-fetch';

const RECIPES = [
    {
        "name": "Quinoa Style Three Delights",
        "description": "A healthy and flavorful dish combining quinoa, chicken, vegetables, and soy sauce.",
        "ingredients": [
            {
                "name": "Carrot",
                "type": "vegetables",
                "amount": 1,
                "unit": "",
                "comments": ""
            },
            {
                "name": "Garlic",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Half a clove"
            },
            {
                "name": "Leek",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Optional vegetables of choice"
            },
            {
                "name": "Chicken/Turkey fillet",
                "type": "meat",
                "amount": 120,
                "unit": "g",
                "comments": "Breast, thigh, or other cuts"
            },
            {
                "name": "Egg",
                "type": "animal-products",
                "amount": 1,
                "unit": "",
                "comments": ""
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": 5,
                "unit": "g",
                "comments": "Half a tablespoon"
            },
            {
                "name": "Ginger",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "Fresh or dried"
            },
            {
                "name": "Soy sauce",
                "type": "liquid",
                "amount": 1,
                "unit": "",
                "comments": "One tablespoon"
            },
            {
                "name": "Couscous/Rice/Quinoa",
                "type": "starches",
                "amount": 45,
                "unit": "g",
                "comments": "1.5 tablespoons raw or 3 tablespoons cooked"
            }
        ],
        "time": {
            "cookingTime": 20,
            "preparationTime": 15
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733842219/BePalmDiet/brejgbf3f1ioixak9fm3.jpg",
        "instructions": [
            {
                "title": "Prepare the Quinoa",
                "description": "Wash the quinoa under running water. Boil 1.5 cups of water, add the quinoa with a pinch of salt, and cook for 20 minutes until the seeds open. Drain and set aside."
            },
            {
                "title": "Cook the Chicken",
                "description": "Cut the chicken breast into medium-sized cubes, season with a little salt, and cook in a pan with olive oil until golden and cooked through. Set aside."
            },
            {
                "title": "Prepare the Vegetables",
                "description": "Finely chop the garlic, slice the leek, cut the other vegetables into pieces or strips, and peel and dice the carrots."
            },
            {
                "title": "Stir-fry the Vegetables",
                "description": "Heat olive oil in a pan and sauté the vegetables over medium heat for a couple of minutes. Grate fresh ginger on top and continue cooking for 4-5 minutes. Remove from the pan."
            },
            {
                "title": "Cook the Egg",
                "description": "Beat the egg and cook it in the same pan as the vegetables, making an omelette. Once ready, cut into pieces."
            },
            {
                "title": "Assemble the Dish",
                "description": "In a bowl, combine the cooked quinoa, sautéed vegetables, egg pieces, and chicken. Mix well and add soy sauce. Mix again and serve."
            }
        ],
        "meal": "lunch",
        "comments": "",
        "rating": 4
    },
    {
        "name": "Curry Peas with Peanuts",
        "description": "A flavorful and aromatic dish made with peas, chicken or turkey, peanuts, and coconut milk, all seasoned with curry and spices.",
        "ingredients": [
            {
                "name": "Canned peas (or frozen)",
                "type": "vegetables",
                "amount": 100,
                "unit": "g",
                "comments": "You can also use frozen peas."
            },
            {
                "name": "Peanuts (natural or roasted)",
                "type": "nuts",
                "amount": 10,
                "unit": "g",
                "comments": ""
            },
            {
                "name": "Onion",
                "type": "vegetables",
                "amount": 0.25,
                "unit": "",
                "comments": "Finely chopped."
            },
            {
                "name": "Garlic clove",
                "type": "vegetables",
                "amount": 1,
                "unit": "",
                "comments": "Finely chopped."
            },
            {
                "name": "Extra vegetables (optional)",
                "type": "vegetables",
                "amount": null,
                "unit": "",
                "comments": "Choose your preferred extra vegetables."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Ground cumin",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Curry powder",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Chicken or turkey fillets (breast, thigh, tenderloin)",
                "type": "meat",
                "amount": 150,
                "unit": "g",
                "comments": "Cut into small pieces."
            },
            {
                "name": "Canned coconut milk",
                "type": "liquid",
                "amount": 50,
                "unit": "g",
                "comments": "3 tablespoons."
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": 5,
                "unit": "g",
                "comments": "1/2 tablespoon."
            }
        ],
        "time": {
            "cookingTime": 10,
            "preparationTime": 10
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733848443/BePalmDiet/receta-de-curry-de-guisantes-con-leche-de-coco-y-jengibre_uph5ac.jpg",
        "instructions": [
            {
                "title": "Prepare Vegetables",
                "description": "Peel and chop the onion and garlic into small pieces. Do the same with any extra vegetables and sauté them in a pan with a little olive oil until they are golden."
            },
            {
                "title": "Cook Chicken",
                "description": "Add the chopped chicken pieces to the pan and cook until browned."
            },
            {
                "title": "Add Peas",
                "description": "Drain the liquid from the can of peas and add them to the pan. Sauté for about two minutes."
            },
            {
                "title": "Add Coconut Milk",
                "description": "Add the coconut milk to the pan and mix well."
            },
            {
                "title": "Season",
                "description": "Add the curry powder, ground cumin, black pepper, and salt to taste. Stir everything and cook for another 5 minutes."
            },
            {
                "title": "Add Peanuts",
                "description": "Add the peanuts to the dish and mix. Serve the dish on your plate."
            }
        ],
        "meal": "lunch",
        "comments": "",
        "rating": 5,
    },
    {
        "name": "Creamy Pasta with Green Asparagus",
        "description": "A creamy pasta dish with green asparagus, cheese, and a hint of black pepper.",
        "ingredients": [
            {
                "name": "Pasta (red lentil, whole wheat, or choice)",
                "type": "starches",
                "amount": 4,
                "unit": "",
                "comments": "Use 4 heaping tablespoons of uncooked pasta."
            },
            {
                "name": "Evaporated milk",
                "type": "liquid",
                "amount": 3,
                "unit": "",
                "comments": "3-4 tablespoons."
            },
            {
                "name": "Grated cheese",
                "type": "animal-products",
                "amount": null,
                "unit": "",
                "comments": "Amount as desired."
            },
            {
                "name": "Green asparagus",
                "type": "vegetables",
                "amount": null,
                "unit": "",
                "comments": "Cut into pieces."
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": 5,
                "unit": "g",
                "comments": "½ tablespoon."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Parsley",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "Fresh, chopped."
            }
        ],
        "time": {
            "cookingTime": 10,
            "preparationTime": 10
        },
        "difficulty": "easy",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733849444/BePalmDiet/pasta-cremosa-con-champinones-y-esparragos_version_1675937956_g3dv9g.jpg",
        "instructions": [
            {
                "title": "Cook the Asparagus",
                "description": "In a pan with olive oil, cook the chopped green asparagus until tender."
            },
            {
                "title": "Add Milk and Pepper",
                "description": "Add the evaporated milk and black pepper to the pan. Stir and cook for a couple of minutes."
            },
            {
                "title": "Finish the Dish",
                "description": "Turn off the heat and add the grated cheese and parsley. Mix in the cooked pasta and stir well to combine."
            }
        ],
        "meal": "lunch",
        "comments": "",
        "rating": 3
    },
    {
        "name": "Fish Meatballs in Hake and Shrimp Sauce",
        "description": "A delicious dish of hake and shrimp meatballs served in a flavorful vegetable broth sauce.",
        "ingredients": [
            {
                "name": "Hake (raw)",
                "type": "fish",
                "amount": 150,
                "unit": "g",
                "comments": "Use fresh hake."
            },
            {
                "name": "Shrimp or cooked peeled prawns",
                "type": "fish",
                "amount": 50,
                "unit": "g",
                "comments": "Use cooked and peeled shrimp."
            },
            {
                "name": "Egg",
                "type": "animal-products",
                "amount": 1,
                "unit": "",
                "comments": "One egg."
            },
            {
                "name": "Whole wheat flour (or oat flour)",
                "type": "starches",
                "amount": 10,
                "unit": "g",
                "comments": "One tablespoon of whole wheat flour (or oat flour)."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Spices (optional, such as cumin)",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "Add any spices of choice, such as cumin."
            },
            {
                "name": "Leek",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Half a leek."
            },
            {
                "name": "Onion",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Half an onion."
            },
            {
                "name": "Vegetable broth",
                "type": "liquid",
                "amount": 200,
                "unit": "g",
                "comments": "One glass of vegetable broth."
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": 15,
                "unit": "g",
                "comments": "One tablespoon of olive oil."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            }
        ],
        "time": {
            "cookingTime": 30,
            "preparationTime": 15
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733850251/BePalmDiet/paso_a_paso_para_hacer_albondigas_de_merluza_y_langostinos_en_salsa_verde_resultado_final_ef48d69c_1280x720_tz5aux.jpg",
        "instructions": [
            {
                "title": "Boil the Hake",
                "description": "Bring water to a boil, then add the hake. Cook for 3 minutes and drain well."
            },
            {
                "title": "Prepare the Meatball Mixture",
                "description": "Mash the drained hake with the cooked and peeled shrimp, salt, and pepper. Use a food processor if necessary. Once combined, transfer to a bowl and mix in the egg, flour, and spices. Stir well with a fork."
            },
            {
                "title": "Form the Meatballs",
                "description": "Shape the mixture into meatballs and bake (or use an air fryer) at 180ºC for 10-15 minutes."
            },
            {
                "title": "Prepare the Sauce",
                "description": "While the meatballs are cooking, prepare the sauce by sautéing the chopped onion and leek with olive oil in a pan until softened."
            },
            {
                "title": "Cook the Sauce",
                "description": "Add the vegetable broth to the pan and let it reduce, leaving most of the water to evaporate. Season with salt and spices to taste."
            },
            {
                "title": "Blend the Sauce (Optional)",
                "description": "At this point, you can blend the sauce for a smoother texture if desired."
            },
            {
                "title": "Serve the Meatballs",
                "description": "Place the meatballs in the sauce and serve."
            }
        ],
        "meal": "lunch",
        "comments": "",
        "rating": 4
    },
    {
        "name": "Creamy Salmon Toasts with Crunchy Vegetables",
        "description": "A healthy and tasty dish with creamy salmon and crunchy vegetables, served on whole-grain bread or tortilla.",
        "ingredients": [
            {
                "name": "Whole wheat bread",
                "type": "starches",
                "amount": 30,
                "unit": "g",
                "comments": "Two slices of whole wheat bread."
            },
            {
                "name": "Whole wheat tortilla",
                "type": "starches",
                "amount": 1,
                "unit": "",
                "comments": "Alternatively, use one whole wheat tortilla."
            },
            {
                "name": "Carrot",
                "type": "vegetables",
                "amount": 1,
                "unit": "",
                "comments": "Chopped."
            },
            {
                "name": "Celery",
                "type": "vegetables",
                "amount": 2,
                "unit": "",
                "comments": "Chopped."
            },
            {
                "name": "Red onion",
                "type": "vegetables",
                "amount": 0.25,
                "unit": "",
                "comments": "Finely chopped."
            },
            {
                "name": "Canned salmon (natural)",
                "type": "fish",
                "amount": 50,
                "unit": "g",
                "comments": "Use two cans (50g each)."
            },
            {
                "name": "Fat-free whipped fresh cheese",
                "type": "animal-products",
                "amount": 3,
                "unit": "",
                "comments": "Use low-fat whipped fresh cheese."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            }
        ],
        "time": {
            "cookingTime": 0,
            "preparationTime": 15
        },
        "difficulty": "easy",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733850463/BePalmDiet/eiliv-aceron-KzZ4w7IltVc-unsplash_vdpxgo.jpg",
        "instructions": [
            {
                "title": "Prepare Vegetables",
                "description": "Chop the carrot, celery, and red onion into small pieces."
            },
            {
                "title": "Prepare Salmon",
                "description": "Open the cans of salmon, drain, and flake the fish into a bowl."
            },
            {
                "title": "Mix Cheese and Salmon",
                "description": "Mix the flaked salmon with the fat-free whipped fresh cheese. Add black pepper to taste."
            },
            {
                "title": "Assemble Toasts",
                "description": "Spread the salmon and cheese mixture onto the whole wheat bread or tortilla. Top with the chopped vegetables."
            },
            {
                "title": "Serve",
                "description": "Serve the creamy salmon toasts with crunchy vegetables."
            }
        ],
        "meal": "dinner",
        "rating": 4
    },
    {
        "name": "Marinated Chicken Thigh with Zucchini Cream",
        "description": "A flavorful marinated chicken thigh paired with a creamy zucchini and goat cheese soup, perfect for a comforting meal.",
        "ingredients": [
            {
                "name": "Chicken thigh",
                "type": "meat",
                "amount": 150,
                "unit": "g",
                "comments": "One chicken thigh."
            },
            {
                "name": "Paprika",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Parsley",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Garlic powder",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Black pepper",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Lemon juice",
                "type": "liquid",
                "amount": null,
                "unit": "",
                "comments": "A small splash of lemon juice."
            },
            {
                "name": "Garlic",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Half a clove of garlic."
            },
            {
                "name": "Zucchini",
                "type": "vegetables",
                "amount": 0.5,
                "unit": "",
                "comments": "Half a zucchini, sliced."
            },
            {
                "name": "Potato",
                "type": "vegetables",
                "amount": 1,
                "unit": "",
                "comments": "One small raw potato, sliced."
            },
            {
                "name": "Leek",
                "type": "vegetables",
                "amount": null,
                "unit": "",
                "comments": "A small amount of leek, sliced."
            },
            {
                "name": "Goat cheese log",
                "type": "animal-products",
                "amount": null,
                "unit": "",
                "comments": "Goat cheese, broken into pieces."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": 5,
                "unit": "g",
                "comments": "A small amount of olive oil."
            }
        ],
        "time": {
            "cookingTime": 45,
            "preparationTime": 15
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733850796/BePalmDiet/ensalada-de-espinacas-y-calabacin-con-queso-de-cabra_version_1652875746_krm48p.jpg",
        "instructions": [
            {
                "title": "Marinate Chicken",
                "description": "Add the paprika, parsley, garlic powder, black pepper, lemon juice, and minced garlic to the chicken thigh. Let it marinate in the refrigerator for 30 minutes or more."
            },
            {
                "title": "Cook Chicken",
                "description": "Preheat the oven to 210ºC (or use an air fryer). Bake the chicken for 30 minutes, flipping it halfway through. Alternatively, you can grill it."
            },
            {
                "title": "Prepare Vegetables",
                "description": "Wash the zucchini, potato, and leek. Slice them into thin pieces."
            },
            {
                "title": "Cook Vegetables",
                "description": "Add the zucchini, potato, and leek to a pot with salt and enough water to cover the ingredients. Bring to a boil."
            },
            {
                "title": "Simmer",
                "description": "Once the mixture is boiling, reduce the heat to medium-low and cook with the lid on until the potato is soft."
            },
            {
                "title": "Blend Soup",
                "description": "Remove from heat, add most of the goat cheese, and season with black pepper. Blend everything until smooth."
            },
            {
                "title": "Serve",
                "description": "Serve the marinated chicken thigh alongside the zucchini cream, garnished with remaining goat cheese on top of the soup."
            }
        ],
        "meal": "dinner",
        "rating": 4
    }, {
        "name": "Empanadilla Exprés",
        "description": "A quick and easy recipe for a delicious tortilla stuffed with shredded chicken, tomato, and cheese, perfect for a snack or light meal.",
        "ingredients": [
            {
                "name": "Whole wheat tortilla",
                "type": "starches",
                "amount": 1,
                "unit": "",
                "comments": "One whole wheat tortilla."
            },
            {
                "name": "Chicken breast",
                "type": "meat",
                "amount": 120,
                "unit": "g",
                "comments": "Shredded cooked chicken (or canned chicken)."
            },
            {
                "name": "Crushed tomato",
                "type": "liquid",
                "amount": 2,
                "unit": "",
                "comments": "Two large tablespoons of crushed tomato."
            },
            {
                "name": "Oregano",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Basil",
                "type": "spices",
                "amount": null,
                "unit": "",
                "comments": "To taste."
            },
            {
                "name": "Shredded cheese",
                "type": "animal-products",
                "amount": 30,
                "unit": "g",
                "comments": "Shredded cheese (to taste, usually mozzarella)."
            }
        ],
        "time": {
            "cookingTime": 7,
            "preparationTime": 10
        },
        "difficulty": "easy",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733854372/BePalmDiet/empanadilla-de-carn_zqruiw.webp",
        "instructions": [
            {
                "title": "Prepare Filling",
                "description": "In a bowl, mix the shredded cooked chicken, crushed tomato, and shredded cheese. Add oregano and basil to taste."
            },
            {
                "title": "Stuff Tortilla",
                "description": "Place the filling in the center of the tortilla and fold it into a half-moon shape, creating a stuffed empanadilla."
            },
            {
                "title": "Seal Edges",
                "description": "Use a fork to seal the edges of the tortilla to ensure the filling stays inside."
            },
            {
                "title": "Optional Egg Wash",
                "description": "If desired, brush the empanadilla with a little egg wash for a golden finish."
            },
            {
                "title": "Cook",
                "description": "Cook the empanadilla in an air fryer for 7 minutes at 180ºC or until golden and crispy."
            }
        ],
        "meal": "dinner",
        "rating": 3
    },
    {
        "name": "Crispy Chicken with Korean-Style Sauce",
        "description": "A crispy chicken dish coated in a delicious, slightly spicy Korean-style sauce, perfect for a savory meal.",
        "ingredients": [
            {
                "name": "Egg",
                "type": "animal-products",
                "amount": 1,
                "unit": "",
                "comments": "One egg for coating the chicken."
            },
            {
                "name": "Corn flakes",
                "type": "starches",
                "amount": 4,
                "unit": "",
                "comments": "Four tablespoons of corn flakes (crushed)."
            },
            {
                "name": "Chicken breast or thigh",
                "type": "meat",
                "amount": 160,
                "unit": "g",
                "comments": "Cut into pieces (better to use whole breast, not filleted)."
            },
            {
                "name": "Tomato sauce",
                "type": "liquid",
                "amount": 2,
                "unit": "",
                "comments": "Two tablespoons of tomato sauce."
            },
            {
                "name": "Soy sauce",
                "type": "liquid",
                "amount": 2,
                "unit": "",
                "comments": "Two tablespoons of soy sauce."
            },
            {
                "name": "Sriracha",
                "type": "spices",
                "amount": 1,
                "unit": "",
                "comments": "One teaspoon of sriracha (optional)."
            },
            {
                "name": "Garlic, chopped",
                "type": "spices",
                "amount": 1,
                "unit": "",
                "comments": "One teaspoon of chopped garlic."
            },
            {
                "name": "Ginger, chopped",
                "type": "spices",
                "amount": 1,
                "unit": "",
                "comments": "One teaspoon of chopped ginger."
            }
        ],
        "time": {
            "cookingTime": 15,
            "preparationTime": 10
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733854639/BePalmDiet/pollo-crujiente-coreano-picante-sesamo-palillos_tenlgm.jpg",
        "instructions": [
            {
                "title": "Prepare Chicken",
                "description": "Cut the chicken into pieces and season with salt and pepper. It’s better to use whole chicken breast rather than filleted."
            },
            {
                "title": "Prepare Corn Flake Coating",
                "description": "Crush the corn flakes with herbs like oregano, garlic powder, and onion powder (you can use a freezer bag to avoid a mess)."
            },
            {
                "title": "Coat Chicken",
                "description": "First, dip the chicken pieces into the egg, then coat them in the crushed corn flakes mixture."
            },
            {
                "title": "Bake Chicken",
                "description": "Place the coated chicken pieces on a baking rack lined with parchment paper. Bake for 15 minutes at 190-200ºC (preheated oven with air circulation)."
            },
            {
                "title": "Prepare Sauce",
                "description": "In a pan, combine the tomato sauce, soy sauce, sriracha, chopped garlic, and ginger."
            },
            {
                "title": "Combine and Serve",
                "description": "Once the chicken is crispy, add it to the sauce and turn off the heat. Mix well and serve."
            }
        ],
        "meal": "dinner",
        "rating": 2
    },
    {
        "name": "Tuna Croquettes with Carrot Chips",
        "description": "A combination of crispy tuna croquettes and homemade carrot chips, making for a delicious and healthy meal or snack.",
        "ingredients": [
            {
                "name": "Canned tuna",
                "type": "fish",
                "amount": 100,
                "unit": "g",
                "comments": "Two cans of natural tuna (50 g each)."
            },
            {
                "name": "Carrot",
                "type": "vegetables",
                "amount": 1,
                "unit": "",
                "comments": "Grated for the croquettes."
            },
            {
                "name": "Egg",
                "type": "animal-products",
                "amount": 1,
                "unit": "",
                "comments": "For binding the croquettes."
            },
            {
                "name": "Powdered cheese",
                "type": "animal-products",
                "amount": 1,
                "unit": "",
                "comments": "One tablespoon of powdered cheese."
            },
            {
                "name": "Parsley",
                "type": "spices",
                "amount": 1,
                "unit": "",
                "comments": "To taste, for flavoring."
            },
            {
                "name": "Spices",
                "type": "spices",
                "amount": "",
                "unit": "",
                "comments": "Any spices you prefer (e.g., garlic powder, pepper)."
            },
            {
                "name": "Carrot",
                "type": "vegetables",
                "amount": 3,
                "unit": "",
                "comments": "Three carrots, cut into sticks for the chips."
            },
            {
                "name": "Olive oil",
                "type": "liquid",
                "amount": "",
                "unit": "",
                "comments": "For drizzling on the carrot chips."
            }
        ],
        "time": {
            "cookingTime": 23,
            "preparationTime": 10
        },
        "difficulty": "easy",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733855266/BePalmDiet/croquetas-de-atun-y-huevo-duro_wysamn.jpg",
        "instructions": [
            {
                "title": "Prepare Ingredients for Croquettes",
                "description": "Grate the carrot for the croquettes and drain the cans of tuna."
            },
            {
                "title": "Form and Bake Croquettes",
                "description": "Combine all the croquette ingredients in a bowl. Mix thoroughly and shape into croquettes. Place them on a baking sheet and bake for 8 minutes at 205ºC."
            },
            {
                "title": "Prepare Carrot Chips",
                "description": "Cut the carrots into sticks for the chips. Drizzle with olive oil and your preferred spices."
            },
            {
                "title": "Cook Carrot Chips",
                "description": "Cook the carrot sticks in the oven, microwave, or air fryer until crispy."
            }
        ],
        "meal": "dinner",
        "rating": 4
    },
    {
        "name": "Spinach Crust Pizza",
        "description": "A healthy pizza made with a spinach-based crust, topped with cheese, vegetables, and your choice of protein like chicken or ham.",
        "ingredients": [
            {
                "name": "Shredded cheese",
                "type": "animal-products",
                "amount": 60,
                "unit": "g",
                "comments": "For topping the pizza."
            },
            {
                "name": "Eggs",
                "type": "animal-products",
                "amount": 2,
                "unit": "",
                "comments": "For binding the pizza crust."
            },
            {
                "name": "Fresh spinach",
                "type": "vegetables",
                "amount": 80,
                "unit": "g",
                "comments": "Fresh spinach for the crust base."
            },
            {
                "name": "Whole wheat flour",
                "type": "starches",
                "amount": 40,
                "unit": "g",
                "comments": "For the pizza crust."
            },
            {
                "name": "Pepper",
                "type": "spices",
                "amount": "",
                "unit": "",
                "comments": "For seasoning the crust."
            },
            {
                "name": "Salt",
                "type": "spices",
                "amount": "",
                "unit": "",
                "comments": "For seasoning the crust."
            },
            {
                "name": "Tomato puree",
                "type": "liquid",
                "amount": "",
                "unit": "",
                "comments": "For pizza topping."
            },
            {
                "name": "Cooked chicken breast or ham",
                "type": "meat",
                "amount": "",
                "unit": "",
                "comments": "For topping the pizza."
            },
            {
                "name": "Onion",
                "type": "vegetables",
                "amount": "",
                "unit": "",
                "comments": "For topping the pizza."
            },
            {
                "name": "Vegetables",
                "type": "vegetables",
                "amount": "",
                "unit": "",
                "comments": "Other vegetables as toppings, e.g., bell peppers, mushrooms."
            }
        ],
        "time": {
            "cookingTime": 20,
            "preparationTime": 10
        },
        "difficulty": "medium",
        "photo": "https://res.cloudinary.com/dmrv2bogq/image/upload/v1733855729/BePalmDiet/pizza-de-escpinaca_rahb60.jpg",
        "instructions": [
            {
                "title": "Prepare the Crust",
                "description": "Blend the spinach, eggs, whole wheat flour, salt, and pepper together until you get a smooth, homogeneous dough."
            },
            {
                "title": "Shape the Crust",
                "description": "Place the dough onto a baking sheet lined with parchment paper and shape it into a pizza base."
            },
            {
                "title": "Bake the Crust",
                "description": "Bake the pizza crust in the oven at 200ºC for 15-20 minutes until the edges are golden and crispy."
            },
            {
                "title": "Add Toppings",
                "description": "Remove the crust from the oven and top with tomato puree, chicken or ham, onion, and any additional vegetables."
            },
            {
                "title": "Final Bake",
                "description": "Return the pizza to the oven and bake for another 5 minutes to melt the cheese and heat the toppings."
            }
        ],
        "meal": "dinner",
        "rating": 4
    }
];


mongoose.connect("mongodb+srv://clapalmerini:MLARJjcz4cQKrC65@cluster0.weg7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(async() => {
        console.log("connect to DB");

        const allRecipes = await Recipe.find();

        if(allRecipes.length){
            await Recipe.collection.drop();
        }
    }).catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async() => {
        for(const recipe of RECIPES) {
            try {
                const formData = new FormData();
                const time  = {
                    cookingTime: recipe.time.cookingTime,
                    preparationTime: recipe.time.preparationTime,
                }
                formData.append("name", recipe.name);
                formData.append("description", recipe.description);
                formData.append("photo", recipe.photo);
                formData.append("ingredients", JSON.stringify(recipe.ingredients));
                formData.append("instructions", JSON.stringify(recipe.instructions));
                formData.append("time", JSON.stringify(time));
                formData.append("difficulty", recipe.difficulty);
                formData.append("meal", recipe.meal);
                formData.append("comments", recipe.comments);
                formData.append("rating", recipe.rating);

                const response = await fetch('http://localhost:3000/api/v1/recipes/create', {
                    method: "POST",
                    body: formData
                });
                if(response.ok) {
                    await response.json();
                    console.log(`Recipe added: ${recipe.name}`);
                } else {
                    console.log(`Recipe failed due to ${response.statusText}`);
                }
            } catch (err) {
                console.error(`Error adding recipe: ${err.message}`);
            }
        }
    }).catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());

