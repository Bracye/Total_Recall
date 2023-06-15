// STRINGS
// //
// firstVar = "Hello World";
// firstVar = 22;
// secondVar = firstVar;
// secondVar = "Goodbye World";
// console.log(firstVar);

// const myName = "Ernest";
// let greetings = `Hello, my name is ${myName}.`;
// console.log(greetings);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log("Name" == "Name");

// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false === false);
// console.log(e == "Kevin");
// console.log((a != b) != c);
// console.log(a == a || d);

//the Farm
// let animal = "Dog";

// const bark = (animal) => {
//   return animal === "Dog" ? "Bark Bark" : "Hey, you're not a dog!";
// };

// console.log(bark(animal));

//Driver's Ed
// const age = 15;

// if (age >= 16) {
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry you're too young.");
// }

//LOOPS

//The Basics
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

//Get Even
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is a even number");
//   } else {
//     console.log(i);
//   }
// }

//Give Me 5
// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log("I found a " + i + ". High Five!");
//   } else if (i % 3 === 0) {
//     console.log("I found a " + i + ". Three is a crowd");
//   } else {
//     console.log(i);
//   }
// }

//Savings Account
// let bank_account = 0;

// for (let i = 1; i <= 10; i++) {
//   bank_account += i;
// } //$55

// console.log("$" + bank_account);

// for (let i = 1; i <= 100; i++) {
//   bank_account += i * 2;
// } //$10155
// console.log("$" + bank_account);

//ARRAYS & CONTROL FLOW
// const quotes = [
//   "You pray for rain, you gotta deal with the mud too.",
//   "The truth will set you free.",
//   "The love of money is the root of all evil.",
// ];

// quotes.pop();
// console.log(quotes);

// const myArray = [5, 10, 500, 20];
// myArray.reverse();
// console.log(myArray);

// let num = 10;

// if (num <= 100) {
//   console.log("little number");
// } else {
//   console.log("big number");
// }

// let number = 9;

// if (number < 5) {
//   console.log("little number");
// } else if (number > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }
//OBJECTS

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)

// IV. Functions

// //Greetings
// printGreeting = (name) => {
//   return `Hello there, ${name}!`;
// };

// console.log(printGreeting("Slimer"));

//Print Cool

// printCool = (name) => {
//   return `${name} is cool`;
// };

// console.log(printCool("Ernest"));

// //Cal Cube
// calculateCube = (side) => {
//   const volume = side ** 3;
//   //   console.log(`The volume of a cube with side length of ${side} is ${volume}`);
// };

// calculateCube(4);

//Vowel

// isVowel = (char) => {
//   const lowerCaseChar = char.toLowerCase();
//   return (
//     lowerCaseChar === "a" ||
//     lowerCaseChar === "e" ||
//     lowerCaseChar === "i" ||
//     lowerCaseChar === "o" ||
//     lowerCaseChar === "u"
//   );
// };

// console.log(isVowel("a"));
// console.log(isVowel("z"));

//Get 2 lengths

// getTwoLengths = (str1, str2) => {
//   const length1 = str1.length;
//   const length2 = str2.length;
//   return [length1, length2];
// };

// console.log(getTwoLengths("Ernest", "Bracy"));

//Get Multi Lengths

// getMultipleLengths = (strings) => {
//   const lengths = [];
//   for (let i = 0; i < strings.length; i++) {
//     lengths.push(strings[i].length);
//   }
//   return lengths;
// };

// console.log(getMultipleLengths(["Hello", "how", "are", "you"]));
// console.log(getMultipleLengths(["My", "Name", "is", "Ernest"]));

// //Max of Three
// maxOfThree = (num1, num2, num3) => {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// };

// console.log(maxOfThree(4, 6, 1000));

// //Print longest word

// printLongestWord = (word) => {
//   let longestWord = "";

//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length) {
//       longestWord = word[i];
//     }
//   }

//   return longestWord;
// };

// console.log(printLongestWord(["Ernest", "Bracy", "Total", "Recall2"]));

//Objects

//User objects

const user = {
  name: "Ernest",
  email: "Ernestbracy1@gmail.com",
  age: 22,
  purchased: [],
};

// //update the user
const updateUser = { ...user };

updateUser.email = "Ernestbracy3@gmail.com";

updateUser.age++;

//Add key and values
updateUser.location = "Detroit";

console.log(updateUser);

//Shopaholic
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

// console.log(user.purchased[2]);

//Object within an object
const friend = {
  name: "Aaron",
  age: 22,
  location: "Detroit",
  purchased: [],
};
user.friend = friend;

user.friend.age = 55;

user.friend.purchased.push("The One Ring");

user.friend.purchased.push("A latte");

console.log(user.friend.purchased[1]);

//User Loop
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

//User.friend Loop

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

//functions can create objects

user.updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
};

user.updateUser();
user.updateUser();

oldAndLoud = person = () => {
  person.age++;
  person.name = person.name.toUpperCase();
};

oldAndLoud(user);
