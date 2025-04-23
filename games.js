// Games data array
const games = [
    {
        title: "Crazy Cattle 3D",
        description: "Tip over the other sheep!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/crazycattle3d.png?raw=true",
        url: "https://crazy-cattle.github.io/iframe/index.html",
        category: "Action"
    },
    {
        title: "Slowroads.io",
        description: "Endless Driving Zen",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/slowroads.png?raw=true",
        url: "https://slowroads.io",
        category: "Casual"
    },
    {
        title: "Monkey Mart",
        description: "Classic Monkey Money Game",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/monkeymart.png?raw=true",
        url: "https://hushygames.github.io/games/monkeymart/game.html",
        category: "Simulation"
    },
    {
        title: "Slope",
        description: "Slide down a hill!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/slope.png?raw=true",
        url: "https://slopenexus.github.io/games/v1.2.5/index.html",
        category: "Action"
    },
    {
        title: "Happy Wheels",
        description: "Ragdoll Gore!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/happywheels.png?raw=true",
        url: "https://happy-wheels-online.github.io/file/",
        category: "Physics"
    },
    {
        title: "Run",
        description: "Jump in space!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/run1.png?raw=true",
        url: "https://3kh0s.github.io/games/run/index.html",
        category: "Platformer"
    },
    {
        title: "Run 2",
        description: "Jump in space better!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/run2.png?raw=true",
        url: "https://ubg89.github.io/Run2/",
        category: "Platformer"
    },
    {
        title: "Run 3",
        description: "Jump in space 3x Better!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/run3.png?raw=true",
        url: "https://blobby-boi.github.io/Run-3/",
        category: "Platformer"
    },
    {
        title: "1v1.lol",
        description: "Fortnite in your browser!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/1v1lol.png?raw=true",
        url: "https://1v1lol.gitlab.io/1v1-lol-2/",
        category: "Shooter"
    },
    {
        title: "Deeeep.io",
        description: "Fish-Eat-Fish World",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/deepio.png?raw=true",
        url: "https://deeeep.io/",
        category: "Arcade"
    },
    {
        title: "Agar.io Clone",
        description: "Squishy ball grabs squishy ball!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/agario.png?raw=true",
        url: "https://kylehue.github.io/agario-clone/",
        category: "Arcade"
    },
    {
        title: "Slither.io",
        description: "Slither into other snakes!",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/slitherio.png?raw=true",
        url: "http://slither.com/io",
        category: "Arcade"
    },
    {
        title: "Smash Karts",
        description: "Smash other people's karts.",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/smashkarts.png?raw=true",
        url: "https://webgltest-17af1.firebaseapp.com/",
        category: "Arcade"
    },
    {
        title: "Tunnel Rush",
        description: "Dodge obstacles in a tunnel.",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/tunnelrush.png?raw=true",
        url: "https://physicsedu16.github.io/g5/class-404/",
        category: "Arcade"
    },
    {
        title: "Towntopia",
        description: "Build your dream town fast.",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/towntopia.png?raw=true",
        url: "https://physicsedu16.github.io/g8/class-100/",
        category: "Simulation"
    },
    {
        title: "Round Racers",
        description: "Manage cars in circular tracks.",
        image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/roundracers.png?raw=true",
        url: "https://physicsedu16.github.io/g97/class-551/",
        category: "Racing"
    },
    {
    title: "Papa's Freezeria",
    description: "Serve cool frozen treats.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/freezeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-freezeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Burgeria",
    description: "Grill, stack, and serve.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/burgeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-burgeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Pizzeria",
    description: "Top, bake, slice, repeat.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/pizzeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-pizzeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Wingeria",
    description: "Fry and sauce wings.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/wingeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-wingeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Sushiria",
    description: "Roll up sushi fast.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/sushiria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-sushiria/",
    category: "Cooking"
  },
  {
    title: "Papa's Pastaria",
    description: "Boil pasta and sauce.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/pastaria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-pastaria/",
    category: "Cooking"
  },
  {
    title: "Papa's Cheeseria",
    description: "Make grilled cheese meals.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/cheeseria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-cheeseria/",
    category: "Cooking"
  },
  {
    title: "Papa's Cupcakeria",
    description: "Bake and decorate cupcakes.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/cupcakeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-cupcakeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Donuteria",
    description: "Fry, glaze, and serve.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/donuteria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-donuteria/",
    category: "Cooking"
  },
  {
    title: "Papa's Taco Mia",
    description: "Grill and wrap tacos.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/tacomia.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-taco-mia/",
    category: "Cooking"
  },
  {
    title: "Papa's Bakeria",
    description: "Fill and bake pies.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/bakeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-bakeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Hotdoggeria",
    description: "Grill dogs, pour drinks.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/hotdoggeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-hot-doggeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Pancakeria",
    description: "Stack pancakes just right.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/pancakeria.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-pancakeria/",
    category: "Cooking"
  },
  {
    title: "Papa's Scooperia",
    description: "Scoop, bake, and serve.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/scooperia.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papas-scooperia/",
    category: "Cooking"
  },
  {
    title: "Papa Louie: Pizzas Attack",
    description: "Fight pizzas, rescue cooks.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/papalouie1.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papa-louie-1/",
    category: "Action"
  },
  {
    title: "Papa Louie 2: Burgers Attack",
    description: "Save friends, dodge burgers.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/papalouie2.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papa-louie-2/",
    category: "Action"
  },
  {
    title: "Papa Louie 3: Sundaes Attack",
    description: "Explore worlds, fight desserts.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/papalouie3.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/papa-louie-3/",
    category: "Action"
  },
  {
    title: "Jacksmith",
    description: "Forge gear, lead battle.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/jacksmith.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/jacksmith/",
    category: "Strategy"
  },
  {
    title: "Cactus McCoy",
    description: "Punch baddies as cactus.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/cactus1.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/cactus-mccoy-1/",
    category: "Adventure"
  },
  {
    title: "Cactus McCoy 2",
    description: "New levels, more action.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/cactus2.png?raw=true",
    url: "https://papasgamesx.github.io/flipline/cactus-mccoy-2/",
    category: "Adventure"
  },
  {
    title: "Rocket Soccer Derby",
    description: "Web Rocket League!",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/cactus2.png?raw=true",
    url: "https://rocket-soccer-derby.github.io/file/",
    category: "Adventure"
  }
];
