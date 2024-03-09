const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const [ moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");



// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

const { cow: bessie, chicken: dolly, sheep: babe, pig: little } = animalSounds;

console.log(`Bessie the cow says ${bessie}`);


// 3.
const { cat: blackAndWhite, dog: black, cow: pink } = animalSounds;

console.log(`Black and White the cat says ${blackAndWhite}`);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

const animalsByColor = [
  ["blackAndWhite", "cat"],
  ["black", "dog"],
  ["pink", "cow"],
];

// Destructure the array to assign variables

// const [[blackAndWhite, animal1], [black, animal2], [pink, animal3]] = animalsByColor;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const [[b, animal1], [k, animal2], [p, animal3]] = animalsByColor;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
