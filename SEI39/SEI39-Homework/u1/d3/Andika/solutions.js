/////////////////////
//Verbal Questions
/////////////////////

/*
1. the parameters of a functions are name of param listed inside bracket in the function definition.
2. arguments are the real values passed to the function
*/

/////////////////////
//Palindrome
/////////////////////

const reverseString = (newString) => {
  const arrayString = newString.split("");
  const reverseArray = arrayString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

const checkPalindrome = (wordStr) => {
  lowerCaseWord = wordStr.toLowerCase();
  if (lowerCaseWord === reverseString(lowerCaseWord)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));


/////////////////////
//Sum Array
/////////////////////

const sumArray = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

/////////////////////
//Prime Numbers
/////////////////////

const checkPrime = (num1) => {
  maxInt = Math.floor(Math.sqrt(num1));
  for (i = 2; i <= maxInt; i++) {
    if (num1 % i === 0) {
      return false;
    }
  }
  return true;
}


const printPrimes = (maxNum) => {
  for (let i = 0; i <= maxNum; i++) {
    if (checkPrime(i) === true) {
      console.log(i);
    }
  }
}

printPrimes(97);

/////////////////////
//Rock Paper Scissors
/////////////////////


// const randomMove = () => {
//   const allMove = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * (allMove.length))
//   return allMove[randomIndex];
// }


// const rockPaperScissors = (computersMove, usersMove) => {
//   console.log(`computer chose ${computersMove}`);
//   console.log(`user chose ${usersMove}`);

//   if (computersMove === usersMove) {
//     console.log(`${computersMove} hit ${usersMove}, draw!`)
//     return;
//   }

//   switch (computersMove) {
//     case "rock":
//       switch (usersMove) {
//         case "scissors":
//           console.log(`${computersMove} beat ${usersMove}, computer wins!`)
//           break;
//         case "paper":
//           console.log(`${usersMove} beat ${computersMove}, user wins!`)
//           break;
//       }
//       break;
//     case "paper":
//       switch (usersMove) {
//         case "rock":
//           console.log(`${computersMove} beat ${usersMove}, computer wins!`);
//           break;
//         case "scissors":
//           console.log(`${usersMove} beat ${computersMove}, user wins!`);
//           break;
//       }
//       break;

//     case "scissors":
//       switch (usersMove) {
//         case "paper":
//           console.log(`${computersMove} beat ${usersMove}, computer wins!`)
//           break;
//         case "rock":
//           console.log(`${usersMove} beat ${computersMove}, user wins!`)
//           break;
//       }
//       break;
//   }
// }

// let computersMove = randomMove();
// let usersMove = randomMove();
// rockPaperScissors(computersMove, usersMove);


/////////////////////
//Rock Paper Scissors Lizard Spock
/////////////////////

const newRandomMove = () => {
  const allMove = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * (allMove.length))
  return allMove[randomIndex];
}
const rockPaperScissorsLizardSpock = (computersMove, usersMove) => {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);

  if (computersMove === usersMove) {
    console.log(`${computersMove} hit ${usersMove}, draw!`)
    return;
  }

  switch (computersMove) {
    case "rock":
      switch (usersMove) {
        case "scissors":
        case "lizard":
          console.log(`${computersMove} beat ${usersMove}, computer wins!`)
          break;
        case "paper":
        case "spock":
          console.log(`${usersMove} beat ${computersMove}, user wins!`)
          break;
      }
      break;
    case "paper":
      switch (usersMove) {
        case "rock":
        case "spock":
          console.log(`${computersMove} beat ${usersMove}, computer wins!`);
          break;
        case "scissors":
        case "lizard":
          console.log(`${usersMove} beat ${computersMove}, user wins!`);
          break;
      }
      break;

    case "scissors":
      switch (usersMove) {
        case "paper":
        case "lizard":
          console.log(`${computersMove} beat ${usersMove}, computer wins!`)
          break;
        case "rock":
        case "spock":
          console.log(`${usersMove} beat ${computersMove}, user wins!`)
          break;
      }
      break;

    case "lizard":
      switch (usersMove) {
        case "paper":
        case "spock":
          console.log(`${computersMove} beat ${usersMove}, computer wins!`)
          break;
        case "rock":
        case "scissors":
          console.log(`${usersMove} beat ${computersMove}, user wins!`)
          break;
      }
      break;

    case "spock":
      switch (usersMove) {
        case "rock":
        case "scissors":
          console.log(`${computersMove} beat ${usersMove}, computer wins!`)
          break;
        case "lizard":
        case "paper":
          console.log(`${usersMove} beat ${computersMove}, user wins!`)
          break;
      }
      break;
  }
}

let computersMove = newRandomMove();
let usersMove = newRandomMove();
rockPaperScissorsLizardSpock(computersMove, usersMove);


/////////////////////
//HFM digit sum
/////////////////////

const sumDigits = (num) => {
  stringNum = String(num);
  strArr = Array.from(stringNum);
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    sum += Number(strArr[i]);
  }
  return sum;
}

console.log(sumDigits(47));

/////////////////////
//HFM Pythagoras
/////////////////////

const calculateSide = (sideA, sideB) => {
  return Math.sqrt((sideA ** 2) + (sideB ** 2));
}

console.log(calculateSide(5, 12));

/////////////////////
//HFM Isotriangle
/////////////////////

const rightIsoTri = (heightLength) => {
  for (let i = 1; i <= heightLength; i++) {
    let hashString = "#".repeat(i)
    console.log(hashString);
  }
}

rightIsoTri(7);

const upsideIsoTri = (heightLength) => {
  for (let i = heightLength; i >= 1; i--) {
    let hashString = "#".repeat(i);
    console.log(hashString);
  }
}

upsideIsoTri(6);

/////////////////////
//HFM Second Numbers
/////////////////////

const secondNumbers = (arr) => {
  let highest = 0;
  let secondHighest = 0;
  let lowest = 1000;
  let secondLowest = 1000;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    };
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    };
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < highest && arr[i] > secondHighest) {
      secondHighest = arr[i];
    };
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lowest && arr[i] < secondLowest) {
      secondLowest = arr[i];
    };
  }
  console.log(`second highest: ${secondHighest}`);
  console.log(`second lowest: ${secondLowest}`);
  return [highest, secondHighest, secondLowest, lowest]

}

secondNumbers([4, 2, 6, 9, 5]);

/////////////////////
//HFM Unique String
/////////////////////

const uniqueString = (wordStr) => {
  let dict = {};
  stringToArray = Array.from(wordStr);
  console.log(stringToArray);
  let uniqueChar = []
  for (let i = 0; i < stringToArray.length; i++) {
    if (!(stringToArray[i] in dict)) {
      uniqueChar.push(stringToArray[i])
      dict[stringToArray[i]] = "1";
    } else {
      continue;
    }
  }
  return (uniqueChar.join(""));
}

console.log(uniqueString("helloworld"));

/////////////////////
//HFM Insert Dash
/////////////////////

const insertDash = (num) => {
  stringFromNum = String(num);
  arrayOfString = Array.from(stringFromNum);
  let finalStr = arrayOfString[0];
  for (let i = 0; i < arrayOfString.length - 1; i++) {
    if (Number(arrayOfString[i]) % 2 !== 0 && Number(arrayOfString[i + 1]) % 2 !== 0) {
      finalStr += '-' + arrayOfString[i + 1];
    } else {
      finalStr += arrayOfString[i + 1];
    }
  }
  return finalStr;
}

console.log(insertDash(454793));