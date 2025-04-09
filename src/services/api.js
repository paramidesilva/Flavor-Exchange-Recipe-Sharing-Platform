// src/services/api.js

export const fetchRecipes = async () => {
  return [
    {
      id: 1,
      title: "Spatchcock Chicken",
      intro:
        "The best way to prepare Spatchcock Chicken - a flattened chicken is rubbed with garlic herb butter and roasted on a sheet pan until gorgeously browned, surrounded by tender vegetables. Its a humble meal with impressively flavorful results!",
      cook: "1 hour 15 minutes",
      servings: 6,
      rating: 4.5,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/11/spatchcock-chicken-20-1460x2190.jpg",
      ingredients: [
        "For the Chicken",
        "4 to 4.5 lb whole chicken",
        "3 Tbsp butter, softened",
        "1 1/2 tsp minced garlic",
        "1 1/2 tsp chopped fresh thyme",
        "1 1/2 tsp chopped fresh rosemary",
        "2 tsp lemon zest, plus lemon wedges for serving",
        "Salt and black pepper",
        "1 tsp paprika",

        "For the Vegetables",
        "1 3/4 lbs red potatoes, cut into 1 1/2 inch chunks",
        "1 lb carrots, peeled and cut into 1-inch chunks",
        "2 tsp minced garlic",
        "1 Tbsp chopped fresh rosemary",
        "2 tsp chopped fresh thyme",
        "1 Tbsp olive oil",
        "3 Tbsp chopped fresh parsley",
      ],
      substitutions: {
        beef: "Use lentils instead of beef for a vegetarian option",
        tomato:
          "Use sun-dried tomatoes instead of fresh tomatoes for a stronger flavor",
      },
      dietary_tags: ["Gluten-Free", "Dairy-Free", "Nut-Free"],
      instructions: [
        "Preheat oven to 425 degrees. Spray an 18 by 13 inch baking sheet with non-stick cooking spray or line with parchment paper.",
        "To prepare chicken, turn the chicken breast side down on a cutting board. Cut spine from chicken using heavy duty kitchen shears, trim down both sides of the backbone from end to end to remove completely (reserve in fridge for chicken stock if desired).",
        "Optionally, for ease in flattening chicken, make a small cut down the upper center of it (the sternum) before turning the chicken. Trim excess visible fat from the chicken, season inside the chicken with salt and pepper.",
        "Turn chicken to opposite side, use the heel of your hand forcefully press between the center of the chicken breasts to crack the breastbone and flatten the chicken (if needed, use a second hand over the first for added pressure).",
        "In a mixing bowl, stir together butter, 1 1/2 tsp each garlic, thyme, rosemary, and the lemon zest. Season with salt and pepper to taste.",
        "Using the back of a spatula or your finger, separate the skin from the chicken to create a pocket for the butter (start at the neck and run down near the opposite end but not all the way through or butter will melt out). Also do this for the thighs. Dab outer chicken skin dry with paper towels.",
        "Spread the butter mixture under the chicken skin on breasts and thighs (it helps to add about a spoonful then spread over the top of the chicken skin to move it downward).",
        "Transfer the chicken to the prepared baking sheet breast side up, turn and tuck the wing tips under the chicken. Season the chicken evenly with paprika, salt, and pepper to taste.",
        "In a large mixing bowl, toss together potatoes, carrots, remaining garlic, rosemary, thyme, and olive oil while seasoning with salt and pepper to taste.",
        "Spread vegetables around the chicken (you can use space under neck area and under wingtips if needed).",
        "Roast in the oven until chicken breasts are 160 to 165 in center on an instant-read food thermometer (thighs should be at least 165 degrees, but it's okay if thighs are hotter. The chicken breasts you don't want past that temperature or they'll dry out), about 50 to 60 minutes. If needed, toss the vegetables around 30 minutes if they are beginning to brown.",
        "Tent with foil and let chicken rest for 10 minutes before carving (for juicier chicken). Garnish everything with parsley and serve with lemon wedges for spritzing over chicken and vegetables.",
      ],
    },
    {
      id: 2,
      title: "Avocado Salsa",
      intro:
        "Bright and zesty avocado salsa! Loaded with flavor and color. Perfect as a dip or topping over a main dish.",
      cook: " 15 minutes",
      servings: 8,
      rating: 4.7,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/08/avocado-salsa-3-1460x2190.jpg",
      ingredients: [
        "6 medium (20 oz) roma tomatoes, seeded and diced",
        "1 cup chopped red onion, diced",
        "1 large or 2 small jalapeños, seeded and diced (1/4 cup. Leave ribs and seeds if you like heat)",
        "3 medium avocados, semi-firm but ripe, peeled, cored and diced",
        "3 Tbsp olive oil",
        "3 Tbsp fresh lime juice",
        "1 clove garlic, finely minced",
        "1/2 tsp salt (more or less to taste)",
        "1/4 tsp freshly ground black pepper",
        "1/2 cup loosely packed cilantro leaves, minced",
      ],
      substitutions: {
        onion: "If needed, you can substitute yellow onion or white onion.",
        cilantro:
          "If you have an aversion to cilantro and it has that soap bitter taste to your tastebuds, try it with parsley instead.",
      },
      dietary_tags: [
        "Vegan",
        "Vegetarian",
        "Gluten-Free",
        "Dairy-Free",
        "Nut-Free",
      ],
      instructions: [
        "Place red onion in a strainer or sieve and rinse under cool water to remove harsh bite. Drain well.",
        "Add the rinsed red onion to a mixing bowl along with diced tomatoes, jalapeños, and avocados.",
        "In a separate small mixing bowl, whisk together olive oil, lime juice, garlic, salt, and pepper until the mixture is well blended.",
        "Pour the olive oil mixture over the avocado mixture, then add cilantro.",
        "Gently toss the mixture to evenly coat. Serve with tortilla chips or over Mexican entrees.",
      ],
    },
    {
      id: 3,
      title: "Brownie Bites",
      intro:
        "Brownie bites are a bite size version of the traditional, homemade fudgy brownies we crave! They are perfectly chocolatey, deliciously buttery, and make a great base for an optional topping of luscious frosting.",
      cook: "30 minutes",
      servings: 24,
      rating: 4.3,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/09/brownie-bites-4-1460x2192.jpg",
      ingredients: [
        "9 Tbsp unsalted butter, cut into 1 Tbsp pieces",
        "1 cup (200g) granulated sugar",
        "1/4 tsp (heaping) salt",
        "2 large eggs",
        "1 1/2 tsp vanilla extract",
        "2/3 cup (86g) all-purpose flour (spoon and level to measure)",
        "6 Tbsp (36g) Dutch process cocoa powder, plus 2 tsp for dusting pan",
        "1/2 cup (85g) mini semi-sweet chocolate chips",
      ],
      substitutions: {
        butter: "Use vegan butter or coconut oil for a dairy-free version",
        "granulated sugar": "Use coconut sugar for a more natural sweetener",
        eggs: "Substitute with 2 flax eggs (1 tbsp ground flaxseed mixed with 3 tbsp water per egg)",
        flour: "Use gluten-free all-purpose flour for a gluten-free option",
        "chocolate chips":
          "Use dairy-free chocolate chips for a vegan or dairy-free version",
      },
      dietary_tags: [ "Nut-Free"],
      instructions: [
        "Preheat oven to 325 degrees.",
        "Spray a 24-cup mini muffin pan with non-stick cooking spray and dust with 2 tsp cocoa powder. Shake to coat evenly and set aside.",
        "Place butter in a large microwave-safe mixing bowl. Heat until just melted in the microwave. Let cool slightly.",
        "Whisk in sugar and salt, then whisk in eggs and vanilla extract. Blend well.",
        "Add flour and cocoa powder and stir until combined, scraping sides and bottom of bowl.",
        "Stir in chocolate chips.",
        "Scoop batter out about 1.5 Tbsp at a time (I use a #40 scoop) and drop into the prepared muffin pan, filling nearly full.",
        "Bake in preheated oven until just set, about 15 to 17 minutes (test with a toothpick, it should be free of batter).",
        "Let cool in pan for 15 minutes before removing and transferring brownie bites to a wire rack to finish cooling.",
        "Optional: Top with cream cheese frosting for added flavor.",
      ],
    },
    {
      id: 4,
      title: "Creamy Pesto Pasta",
      intro:
        "Mini al dente pasta is coated in a luxurious sauce that's speckled with a generous amount of fresh basil, infused with garlic and parmesan, and it's completely easy to make. It's like a fusion of creamy alfredo sauce meets fresh pesto pasta and it's undeniably delicious!",
      cook: " 30 minutes",
      servings: 6,
      rating: 3,
      dietary_tags: ["Gluten-Free", "Vegetarian", "Vegan", "Dairy-Free"],
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/07/creamy-pesto-pasta-03-1460x2190.jpg",
      ingredients: [
        "2 1/2 cups packed (54g) fresh basil leaves",
        "3 Tbsp extra virgin olive oil, divided",
        "2 Tbsp water",
        "12 oz dry mini farfalle or regular farfalle pasta",
        "Salt and black pepper",
        "1 1/2 Tbsp minced garlic (4 cloves)",
        "3/4 cup heavy cream, or 1/4 cup more for a creamier pasta",
        "2 oz parmesan cheese, finely grated with a rasp grater (1 cup)",
      ],
      substitutions: {
        "heavy cream":
          "Use coconut cream or cashew cream for a dairy-free option",
        "parmesan cheese": "Use nutritional yeast for a vegan alternative",
        pasta:
          "Substitute farfalle with gluten-free pasta for a gluten-free version",
      },
      dietary_tags: [
        "Vegan",
        "Vegetarian",
        "Gluten-Free",
        "Dairy-Free",
        "Nut-Free",
      ],
      instructions: [
        "Add basil leaves to a small or medium food processor along with 2 Tbsp olive oil and 2 Tbsp water. Pulse until basil is very finely minced (stop and scrape down processor occasionally). Transfer to a small airtight container and set aside.",
        "Bring 10 cups of water to a boil in a large pot. Season water with a fair amount of salt, add farfalle and cook according to times listed on the package. Reserve 1/2 cup pasta water then drain pasta.",
        "Return empty pot to medium-low heat and add remaining 1 Tbsp olive oil. Add garlic and sauté until fragrant and just barely deepening in color (but not browning), about 20 to 30 seconds. Pour heavy cream and bring to a light simmer.",
        "Reduce heat to low, stir in parmesan cheese, then add drained pasta and basil mixture and toss to evenly coat. Season with salt and pepper to taste, thin with reserved pasta water as needed (it will thicken as it rests). You can also add the additional 1/4 cup cream if you want it slightly creamier.",
      ],
    },
    {
      id: 5,
      title: "Thai Chicken Lettuce Wraps",
      intro:
        "Thai Chicken Lettuce Wraps are a flavorful Asian dish made with lean protein, veggies, a sweet and savory sauce and a variety of satisfying garnishes. You can serve them as an appetizer, side dish or main dish. ",
      cook: " 35 minutes",
      servings: 4.0,
      rating: 5.7,
      dietary_tags: ["Gluten-Free", "Vegetarian", "Vegan", "Dairy-Free"],
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2016/05/thai-lettuce-wraps-1-1365x2048.jpg",
      ingredients: [
        "--- For the Sauce ---",
        "3 Tbsp low-sodium soy sauce",
        "2 Tbsp fish sauce",
        "2 1/2 Tbsp brown sugar",
        "2 Tbsp lime juice",
        "1 tsp sesame oil",
        "2 tsp cornstarch",

        "--- For the Filling ---",
        "5 green onions, sliced, light parts and green parts kept separate",
        "1 Tbsp minced garlic",
        "1 Tbsp minced ginger",
        "1 1/2 lbs 92% lean ground chicken or turkey",
        "1 Tbsp olive oil or vegetable oil",
        "1 red bell pepper, cored and diced",
        "1 1/2 cups matchstick carrots, roughly chopped",
        "1/3 cup chopped cilantro",
        "1/4 cup chopped unsalted dry roasted peanuts",
        "Lettuce leaves (for serving)",
        "Hot sauce and/or peanut sauce (for serving)",
      ],
      substitutions: {
        "soy sauce": "Use tamari for a gluten-free version of soy sauce",
        "fish sauce":
          "Use coconut aminos for a soy-free and gluten-free alternative",
        "ground chicken or turkey":
          "Use ground beef or plant-based ground meat for a non-poultry option",
        peanuts: "Use sunflower seeds or cashews if allergic to peanuts",
        "sesame oil":
          "Use olive oil or avocado oil if sesame oil is unavailable",
      },
      dietary_tags: ["Gluten-Free", "Dairy-Free", "Nut-Free"],
      instructions: [
        "In a small mixing bowl, whisk together soy sauce, fish sauce, brown sugar, lime juice, sesame oil, and cornstarch, set aside.",
        "Heat oil in a large non-stick skillet over medium-high heat. Add lighter portions of green onions, garlic, and ginger and sauté for 30 seconds.",
        "Add chicken and cook, tossing and breaking up chicken occasionally until nearly cooked through (don't drain).",
        "Add red bell pepper and cook until just slightly softened, about 2 minutes. Add carrots, then whisk sauce mixture once more and pour into skillet.",
        "Cook, tossing frequently until sauce has thickened (and chicken is fully cooked through), about 1 minute. Taste and season with a little salt if needed.",
        "Add in cilantro, green onion greens, and peanuts. Serve warm over whole lettuce leaves with hot sauce, peanuts, and peanut sauce if desired.",
      ],
    },
    {
      id: 6,
      title: "Strawberry Milkshake",
      intro:
        "A decadent dessert drink made with plenty of fresh strawberries, creamy ice cream, rich milk and cream, and sweet strawberry jam.",
      cook: " 10 minutes",
      servings: 3,
      rating: 5.2,
      dietary_tags: ["Gluten-Free", "Vegetarian", "Vegan", "Dairy-Free"],
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/05/strawberry-milkshake-4-682x887.jpg",
      ingredients: [
        "1 lb. strawberries, chilled, stems trimmed",
        "1/2 cup milk",
        "1/4 cup heavy cream",
        "3 Tbsp strawberry jam (preferably freezer jam)",
        "10 oz. (3 cups) strawberry ice cream or vanilla ice cream (such as Tillamook)",
        "Sweetened whipped cream, for topping (optional)",
      ],
      substitutions: {
        milk: "Use almond milk or oat milk for a dairy-free version",
        "heavy cream":
          "Substitute with coconut cream for a dairy-free alternative",
        "strawberry jam":
          "Use any fruit jam like raspberry or blueberry if you prefer",
        "ice cream": "For a vegan version, use dairy-free ice cream or sorbet",
      },
      dietary_tags: ["Vegetarian", "Gluten-Free", "Nut-Free"],
      instructions: [
        "Add strawberries, milk, cream, jam, and ice cream to a high-speed blender. Cover with the lid.",
        "Begin blending on low speed and gradually increase to high speed. Blend until smooth.",
        "Pour into 3 glasses and serve immediately, or pour the mixture into popsicle molds (inserting wooden sticks) and freeze for 6 hours.",
      ],
    },
    {
      id: 7,
      title: "Korean Beef Bowls",
      intro:
        " Super fast and seriously delicious simplified Korean Beef Bowls! Perfectly seasoned and ready in under 30 minutes. A recipe definitely worthy of your dinner rotation!",
      cook: " 30 minutes",
      servings: 4,
      rating: 4.9,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2017/08/korean-beef-bowls-2-1365x2048.jpg",
      ingredients: [
        "--- For the Sauce ---",
        "1 1/2 Tbsp honey",
        "1 1/2 Tbsp dark brown sugar (light can be substituted)",
        "1 Tbsp sesame oil",
        "2 tsp fresh lime juice",
        "3 Tbsp soy sauce",
        "2 Tbsp water",

        "--- For the Filling ---",
        "2 tsp vegetable oil",
        "18 oz. 85% lean ground beef",
        "1/3 cup chopped green onions, white and light portion",
        "1 Tbsp minced fresh garlic",
        "1 Tbsp peeled and minced fresh ginger",
        "1/2 tsp red pepper flakes (optional)",
        "1 tsp cornstarch mixed with 2 tsp water (optional)",

        "--- For the serving ---",
        "Chopped green onions (green portion), chopped unsalted peanuts, or toasted sesame seeds",
        "2 cups cooked white or brown rice, or cauliflower 'rice' (or more as desired)",
      ],
      substitutions: {
        honey: "Use maple syrup or agave syrup for a vegan version",
        "sesame oil":
          "Use olive oil or avocado oil if sesame oil is unavailable",
        "soy sauce": "Use tamari for a gluten-free version or coconut aminos",
        "ground beef":
          "Substitute with ground turkey, chicken, or a plant-based alternative for a lighter or vegan version",
        cornstarch: "Use arrowroot powder as an alternative thickener",
      },
      dietary_tags: ["Dairy-Free"],
      instructions: [
        "In a small mixing bowl, whisk together honey, brown sugar, sesame oil, lime juice, soy sauce, and water. Set aside.",
        "Preheat a 12-inch non-stick skillet over moderately high heat. Crumble beef into 1-inch chunks. Add oil to skillet and beef chunks, leaving space between them to allow for browning.",
        "Let the beef cook undisturbed for 2 1/2 - 3 minutes until nicely browned on the bottom. Sprinkle in green onions (white/light portion), garlic, ginger, and optional red pepper flakes.",
        "Toss and break up beef, continuing to cook until beef is fully browned and cooked through, about 2-3 minutes longer. If there's excess fat, dab it up with a paper towel.",
        "Pour in the honey mixture and reduce heat to medium. If you want the sauce thickened, add the cornstarch/water mixture at this point. Simmer the beef with the sauce, stirring frequently for about 1 minute.",
        "Taste and adjust seasoning with more soy sauce or a little salt if needed.",
        "Serve warm over rice, and sprinkle with green onions, peanuts, or toasted sesame seeds.",
      ],
    },
    {
      id: 8,
      title: "Chicken Caesar Pasta Salad",
      intro:
        "Bright and zesty avocado salsa! Loaded with flavor and color. Perfect as a dip or topping over a main dish.",
      cook: " 15 minutes",
      servings: 8,
      rating: 4.7,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2024/07/chicken-caesar-pasta-salad-16-1365x2048.jpg",
      ingredients: [
        "--- For the dressing ---",
        "5 anchovy fillets, canned in oil (drained)",
        "3/4 cup mayonnaise",
        "3 Tbsp fresh lemon juice",
        "1/4 cup finely grated parmesan cheese",
        "1 1/2 tsp dijon mustard",
        "2 tsp Worcestershire sauce",
        "1 1/2 tsp minced garlic",
        "Salt and black pepper, to taste",

        "--- For the Salad ---",
        "10 oz. dry penne pasta",
        "4 cups chopped romaine lettuce (preferably romaine hearts)",
        "1 lb boneless skinless chicken breasts, grilled, cooled, and chopped",
        "1 pint grape tomatoes, halved",
        "3/4 cup finely shredded parmesan cheese",
        "2 Tbsp chopped fresh parsley",
        "2 cups croutons, homemade or store-bought",
        "1/2 cup reserved pasta water (to thin as needed)",
      ],
      substitutions: {
        "anchovy fillets":
          "Use capers or a dash of soy sauce for a vegetarian-friendly option",
        mayonnaise:
          "Use Greek yogurt or a vegan mayo for a lighter or vegan version",
        "parmesan cheese":
          "Use nutritional yeast or a plant-based parmesan for dairy-free or vegan",
        "Worcestershire sauce": "Use vegan Worcestershire or soy sauce",
        "penne pasta":
          "Use whole wheat, gluten-free, or chickpea pasta for dietary needs",
        chicken:
          "Replace with tofu, tempeh, or grilled mushrooms for vegetarian/vegan option",
        croutons: "Use gluten-free croutons or roasted chickpeas",
      },
      dietary_tags: ["Nut-Free"],
      instructions: [
        "Cook the pasta in salted water according to package directions. Reserve 1/2 cup pasta cooking water and set aside to cool. Drain pasta and let cool completely on a baking sheet.",
        "Mince anchovies and mash into a paste in a medium mixing bowl. Add mayonnaise, lemon juice, parmesan, dijon mustard, Worcestershire sauce, garlic, salt, and pepper. Whisk to blend. Chill until ready to use.",
        "In a large salad bowl, combine cooled pasta, lettuce, chicken, tomatoes, and parsley. Pour dressing over and toss well to coat. Thin with reserved pasta water if needed.",
        "Add croutons and additional parmesan and toss lightly to mix. Serve immediately or chill.",
      ],
    },
  ];
};

export const fetchRecipeById = async (id) => {
  const allRecipes = await fetchRecipes();
  return allRecipes.find((r) => r.id.toString() === id);
};
