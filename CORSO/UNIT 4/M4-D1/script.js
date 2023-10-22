//!--------------------------------------------- ESERCIZIO #1
function intCheck(a, b) {
  a = 25;
  b = 25;

  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(`LOG esercizio #1: ${intCheck()}`);

//!--------------------------------------------- ESERCIZIO #2
const string = "epicoder";
const position = 7;

function removeChar(string, position) {
  string = string.replace(string[position], "");
  return string;
}
const modString = removeChar(string, position);
console.log(`LOG esercizio #2: ${modString}`);

//!--------------------------------------------- ESERCIZIO #3
const a = 35;
const b = 69;

function numBetween() {
  if ((a >= 40 && a <= 60) || (b >= 70 && b <= 100)) {
    return true;
  } else {
    return false;
  }
}
const result3 = numBetween();
console.log(`LOG esercizio #3: ${result3}`); //expected output: false

//!--------------------------------------------- ESERCIZIO #4
const city = "New York";

function includes(city) {
  if (city.includes("Los") || city.includes("New")) {
    return city;
  } else {
    return false;
  }
}
const result4 = includes(city);
console.log(`LOG esercizio #4: ${result4}`); //expected output: New York

//!--------------------------------------------- ESERCIZIO #5
const sumArr = [20, 5, 45];
let sum = 0;

function sumArray(sumArr) {
  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }
}
sumArray(sumArr);
console.log(`LOG esercizio #5: ${sum}`); //expected output: 70

//!--------------------------------------------- ESERCIZIO #6
const notIncludeArr = [3, 45, 10, 29];

function notInclude() {
  for (let i = 0; i < notIncludeArr.length; i++) {
    if (notIncludeArr[i] == 1 || notIncludeArr[i] == 3) {
      return false;
    } else {
      return true;
    }
  }
}
const result6 = notInclude();
console.log(`LOG esercizio #6: ${result6}`); //expected output: false

//!--------------------------------------------- ESERCIZIO #7
const angle = 90;

function angleType(angle) {
  if (angle < 90) {
    return "angolo acuto";
  } else if (angle > 90 && angle < 180) {
    return "angolo ottuso";
  } else if (angle == 90) {
    return "angolo retto";
  } else if (angle == 180) {
    return "angolo piatto";
  } else {
    return "sicuro che stiamo parlando di un angolo?";
  }
}
const result7 = angleType(angle);
console.log(`LOG esercizio #7: ${result7}`); //expected output: angolo retto

//!--------------------------------------------- ESERCIZIO #8
const strAcronimo = "automobili club italia";
let acronimo = "";

function getAcronym(strAcronimo) {
  let elements = strAcronimo.split(" ");
  // console.log(elements);

  for (let i = 0; i < elements.length; i++) {
    acronimo += elements[i][0];
  }
  return acronimo.toUpperCase();
}
acronimo = getAcronym(strAcronimo);
console.log(`LOG esercizio #8: ${acronimo}`); //expected output: ACI

//?------------------------------------------------------- ESERCIZI EXTRA (facoltativi)

console.log("# --- INIZIO STAMPE SOLUZIONI ESERCIZI EXTRA --- #");

//!--------------------------------------------- EXTRA #1
function caratterePiuFrequente(string1) {
  let count = {};
  for (let char of string1) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  let mostCommonChar = "";
  let maxCount = 0;
  for (let char of Object.keys(count)) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      mostCommonChar = char;
    }
  }
  return mostCommonChar;
}
console.log(`LOG extra #1: ${caratterePiuFrequente("maaammaaaa")}`); //expected output: 'a'

//!--------------------------------------------- EXTRA #2
function anagram(stringOne, stringTwo) {
  //stringa1 = stringa1.replace(/[^\w]/g, ''); per rimuovere gli spazi

  let modStringOne = stringOne.split("").sort().join("");
  // console.log(modStringOne);
  let modStringTwo = stringTwo.split("").sort().join("");
  // console.log(modStringTwo);

  if (modStringOne !== modStringTwo) {
    return false;
  } else {
    return true;
  }
}
console.log(`LOG extra #2: ${anagram("arte", "rate")}`); //expected output: true

//todo--------------------------------------------- EXTRA #3
let stringThree = "cartine";
let arrStrings = ["carenti", "incerta", "espatrio"];
let modArrStrings = [];
let finalArray = [];

function trueAnagram(stringThree, arrStrings) {
  for (let i = 0; i < arrStrings.length; i++) {
    let modArrEl = arrStrings[i].split("").sort().join("");
    // console.log(modArrEl);
    modArrStrings.push(modArrEl);
  }
  // console.log(modArrStrings);
  let modStringThree = stringThree.split("").sort().join("");
  // console.log(modStringThree);
  for (let i = 0; i < modArrStrings.length; i++) {
    if (modStringThree === modArrStrings[i]) {
      finalArray.push(modArrStrings[i]);
    }
  }
  // console.log(finalArray);
  for (let i = 0; i < finalArray.length; i++) {
    finalArray[i] = arrStrings[i];
    // console.log(finalArray);
  }
}
console.log(`LOG extra #3: ${trueAnagram(stringThree, arrStrings)}`);

//!--------------------------------------------- EXTRA #4
function palindrome(stringP) {
  let stringReverse = stringP.split("").reverse().join("");
  // console.log(stringReverse);
  if (stringReverse === stringP) {
    return true;
  } else {
    return false;
  }
}
console.log(`LOG extra #4: ${palindrome("osso")}`); //expected output: true

//!--------------------------------------------- EXTRA #5
function numReverse(num) {
  num = parseFloat(num.toString().split("").reverse().join(""));
  return num;
  // console.log(num);
}
console.log(`LOG extra #5: ${numReverse(569)}`); //expected output: 965

//!--------------------------------------------- EXTRA #6
function numStairs(x) {
  let res = "";

  for (let i = 0; i <= x; i++) {
    res += "#".repeat(i) + "\n";
  }
  return res;
}
console.log(`LOG extra #6: ${numStairs(4)}`);

//!--------------------------------------------- EXTRA #7
function stringReverse(string7) {
  string7 = string7.split("").reverse().join("");
  return string7;
}
console.log(`LOG extra #7: ${stringReverse("Epicode")}`); //expected output: 'edocipE'
