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
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/rocketsoccer.png?raw=true",
    url: "https://rocket-soccer-derby.github.io/file/",
    category: "Adventure"
  },
  {
    title: "Bob the Robber 1",
    description: "Steal stuff, avoid guards.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/bobtherobber1.png?raw=true",
    url: "https://bobtherobber.io/1.embed",
    category: "Stealth"
  },
  {
    title: "Bob the Robber 2",
    description: "Sneak past security systems.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/bobtherobber2.png?raw=true",
    url: "https://mdtowerz.github.io/bob-the-robber/",
    category: "Stealth"
  },
  {
    title: "Bob the Robber 3",
    description: "New missions, tougher heists.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/bobtherobber3.png?raw=true",
    url: "https://html5.gamedistribution.com/16eb5eb6f9b841688478eb635fde78b5/?gd_sdk_referrer_url=https%3A%2F%2Fbobtherobber.io%2Fbob-the-robber-3&rd=1",
    category: "Stealth"
  },
  {
    title: "Bob the Robber 4",
    description: "Steal worldwide treasures fast.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/bobtherobber4.png?raw=true",
    url: "https://bob-the-robber.gitlab.io/file/",
    category: "Stealth"
  },
  {
    title: "Bloons TD 1",
    description: "Pop bloons, place monkeys.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/btd1.png?raw=true",
    url: "https://23-azo.github.io/a7/bloons-tower-defense-1/",
    category: "Tower Defense"
  },
  {
    title: "Bloons TD 2",
    description: "More tracks, more bloons.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/btd2.png?raw=true",
    url: "https://reider71164.github.io/btd2",
    category: "Tower Defense"
  },
  {
    title: "Bloons TD 3",
    description: "Advanced towers, harder waves.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/btd3.png?raw=true",
    url: "https://ubg89.github.io/BloonsTowerDefense3/",
    category: "Tower Defense"
  },
  {
    title: "Bloons TD 4",
    description: "Epic bloon popping battles.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/btd4.png?raw=true",
    url: "https://ubg89.github.io/BloonsTowerDefense4/",
    category: "Tower Defense"
  },
  {
    title: "Bloons TD 5",
    description: "Upgrade towers, pop more.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/btd5.png?raw=true",
    url: "https://reider71164.github.io/btd5/",
    category: "Tower Defense"
  },
  {
    title: "Google Snake",
    description: "Eat food, grow longer.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/googlesnake.png?raw=true",
    url: "https://sudoku-online.github.io/a8/google-snake/",
    category: "Arcade"
  },
  {
    title: "Space Waves",
    description: "Defend against alien waves.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/spacewaves.png?raw=true",
    url: "https://igroutka.ru/loader/game/51356/",
    category: "Shooter"
  },
  {
    title: "Drift Hunters",
    description: "Drift cars, earn cash.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/drifthunters.png?raw=true",
    url: "https://drift-hunters-2.github.io/class911/drift-hunters/",
    category: "Racing"
  },
  {
    title: "Drive Mad",
    description: "Drive crazy, avoid crashes.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/drivemad.png?raw=true",
    url: "https://physicsedu16.github.io/g20/class-401/",
    category: "Driving"
  },
  {
    title: "Monster Tracks",
    description: "Climb hills, survive falls.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/monstertracks.png?raw=true",
    url: "https://monstertracks.github.io/file/",
    category: "Driving"
  },
  {
    title: "Drift Boss",
    description: "Click to drift corners.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/driftboss.png?raw=true",
    url: "https://driftbossonline.github.io/file/",
    category: "Driving"
  },
  {
      title: "Idle Breakout",
      description: "Break bricks, upgrade balls.",
      image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/idlebreakout.png?raw=true",
      url: "https://buckyz.github.io/IdleBreakout/",
      category: "Idle"
  },
  {
      title: "Snow Rider 3D",
      description: "Slide down the hill!",
      image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/snowrider.png?raw=true",
      url: "https://snow-rider3d.github.io/file/",
      category: "Action"
  },
  {
      title: "Tomb of the Mask",
      description: "Escape the tomb!",
      image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/tombofthemask.png?raw=true",
      url: "https://tombofthemask.gitlab.io/file/",
      category: "Arcade"
  },
  {
      title: "Minecraft 1.8.8",
      description: "Mine and Craft",
      image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/minecraft188.png?raw=true",
      url: "https://kalibara4.github.io/eagler/1.8.8//",
      category: "Casual"
  },
  {
    title: "Moto X3M",
    description: "Race, flip, dodge traps.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/motox3m.png?raw=true",
    url: "https://dreadhead-parkouronline.github.io/g26/class-458/",
    category: "Racing"
  },
  {
    title: "Moto X3M 2",
    description: "More tracks, more flips.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/motox3m2.png?raw=true",
    url: "https://motox3munblocked.github.io/2/",
    category: "Racing"
  },
  {
    title: "Moto X3M Winter",
    description: "Snowy flips, wild rides.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/motox3mwinter.png?raw=true",
    url: "https://labgstore1812.github.io/g5/class-460/",
    category: "Racing"
  },
  {
    title: "Moto X3M Pool Party",
    description: "Wet ramps, insane jumps.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/motox3mpool.png?raw=true",
    url: "https://labgstore1812.github.io/g5/class-462/",
    category: "Racing"
  },
  {
    title: "Moto X3M Spooky",
    description: "Ghost tracks, creepy stunts.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/motox3mspooky.png?raw=true",
    url: "https://labgstore1812.github.io/g5/class-461/",
    category: "Racing"
  },
{
  title: "Stickman Hook",
  description: "Swing fast, stick hard.",
  image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/stickmanhook.png?raw=true",
  url: "https://stickmanhook.gitlab.io/file/",
  category: "Arcade"
},
  {
    title: "Fireboy & Watergirl",
    description: "Solve with fire and water.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy1.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-346/",
    category: "Puzzle"
  },
  {
    title: "Fireboy & Watergirl 2",
    description: "Temple teamwork returns again.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy2.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-345/",
    category: "Puzzle"
  },
  {
    title: "Fireboy & Watergirl 3",
    description: "New levels, same chaos.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy3.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-344/",
    category: "Puzzle"
  },
  {
    title: "Fireboy & Watergirl 4",
    description: "Co-op challenges get tougher.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy4.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-343/",
    category: "Puzzle"
  },
  {
    title: "Fireboy & Watergirl 5",
    description: "Use both, beat puzzles.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy5.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-342/",
    category: "Puzzle"
  },
  {
    title: "Fireboy & Watergirl 6",
    description: "More temples, trickier paths.",
    image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/fireboy6.png?raw=true",
    url: "https://fireboy-and-watergirl-online.github.io/g177/class-341/",
    category: "Puzzle"
  },
{
  title: "Basketball Stars",
  description: "Dunk hard, steal fast.",
  image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/basketballstars.png?raw=true",
  url: "https://dreadhead-parkouronline.github.io/g5/class-449/",
  category: "Sports"
},
{
  title: "Paper.io 2",
  description: "Claim land, dodge death.",
  image: "https://github.com/jacldotjacl/graduationgames/blob/main/gameicons/paperio2.png?raw=true",
  url: "https://paperio-2.github.io/a9/paper-io-2/",
  category: "Arcade"
}
];
