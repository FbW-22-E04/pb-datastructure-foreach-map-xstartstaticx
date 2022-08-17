// 1
const numbers = [1, 2, 3];
const numbers2 = [5, 1, 2, 3, 10];

function doubleValues(arr) {
  const doubledNumbers = arr.map((item) => item * 2);
  console.log("Q1:", doubledNumbers);
}

doubleValues(numbers);
doubleValues(numbers2);
console.log("----------------");

// 2
function onlyEvenValues(arr) {
  const q2NewArray = [];
  arr.forEach((item) => {
    if (item % 2 === 0) {
      q2NewArray.push(item);
    }
  });
  console.log("Q2:", q2NewArray);
}

onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);
// (--------------------old sucessful way----------------)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = [];
// arr.forEach((number) => {
//   if (number % 2 === 0) {
//     even.push(number);
//   }
// });
// console.log("Q2:", even);

// (----------or with filter--------)
// function onlyEvenValues(arr) {
//   const evenNums = arr.filter((number) => {
//     return number % 2 === 0;
//   });
//   console.log("Q2:", evenNums);
// }
// onlyEvenValues(numbers);
// onlyEvenValues(numbers2);
console.log("-----------------");

// 3
function showFirstAndLast(arr) {
  const q3Map = arr.map((item) => {
    return item[0] + item.slice(-1);
    // or return item[0] + item[item.length - 1];
  });
  console.log("Q3:", q3Map);
}

showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

// --------------other way----------------
// const result = [];
// const array2 = ["colt", "matt", "tim", "udemy"];
// function showFirstAndLast() {
//   array2.forEach((item) => result.push(item[0] + item[item.length - 1]));
// }
// showFirstAndLast();
// console.log("Q3:", result);
console.log("-----------------");

// 4
function addKeyAndValue(arr, key, value) {
  const q4Map = arr.map((item) => {
    item[key] = value;
    return item;
  });
  console.log(q4Map);
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

// ---------------other solution------------------
// const addKeyAndValue = (arr, key, value) => {
//   arr.forEach((item) => {
//     item[key] = value;
//   });
//   console.log("Q4:", arr);
// };

// addKeyAndValue(
//   [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
//   "title",
//   "instructor"
// );
console.log("-----------------");

// 5
// function vowelCount(aString) {
//   vowels = "aeiou".split("");
//   anObject = {};
//   aString = aString.toLowerCase();

//   vowels.forEach((vowel) => {
//     if (aString.split(vowel).length - 1 > 0)
//       anObject[vowel] = aString.split(vowel).length - 1;
//   });
//   return anObject;
// }

// console.log(
//   "Q5:",
//   'vowelCount("Elie"):',
//   vowelCount("Elie"),
//   "Tim: ",
//   vowelCount("Tim"),
//   "Matt: ",
//   vowelCount("Matt"),
//   "hmmm: ",
//   vowelCount("hmmm"),
//   "I Am awesome and so are you!:",
//   vowelCount("I Am awesome and so are you")
// );

function vowelCount(string) {
  const stringFixed = string.toLowerCase();

  const arrFromString = [...stringFixed];

  const vowels = "aeiou";
  const returnedVowels = {};

  arrFromString.forEach((letter) => {
    if (vowels.includes(letter)) {
      if (returnedVowels[letter] === undefined) {
        returnedVowels[letter] = 1;
      } else {
        returnedVowels[letter] += 1;
      }
    }
  });

  console.log(returnedVowels);
  return returnedVowels;
}

vowelCount("Elie");
