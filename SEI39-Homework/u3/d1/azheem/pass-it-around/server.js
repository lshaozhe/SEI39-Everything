const express = require("express");

const app = express();

// main app portion
// app.get("/", (req, res) => {
//   res.send(`
//   <html>
//     <body>
//         <h1>99 Bottles of beer on the wall</h1>
//         <a href="/98">take one down, pass it around</a>
//     </body>
//   </html>
//   `);
// });

// app.get("/:number_of_bottles", (req, res) => {
//   if (req.params.number_of_bottles > 0) {
//     res.send(`
//         <html>
//             <body>
//                 <h1>${
//                   req.params.number_of_bottles
//                 } Bottles of beer on the wall</h1>
//                 <a href="/${
//                   req.params.number_of_bottles - 1
//                 }">take one down, pass it around</a>
//             </body>
//         </html>
//         `);
//   } else {
//     res.send(`
//     <html>
//     <body>
//         <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
//         <a href="/">start over</a>
//     </body>
// </html>
//     `);
//   }
// });

// Bonus
app.get("/bugs", (req, res) => {
  res.send(`
        <html>
            <body>
                <p>99 little bugs in the code</p>
                <p>99 little bugs</p>
                <a href="/bugs/98">Take one down</a>
                <p>Patch it around</p>
                <p>${Math.floor(
                  Math.random() * 999
                )} bugs in the code</p>            
            </body>
        </html>
    `);
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const randomBugCount = Math.floor(Math.random() * 5);
  console.log(randomBugCount);

  // bug count can randomly go up when user clicks on Take one down link
  if (randomBugCount === 1) {
    res.send(`
    <html>
        <body>
            <p>${req.params.number_of_bugs} little bugs in the code</p>
            <p>${req.params.number_of_bugs} little bugs</p>
            <a href="/bugs/${
              parseInt(req.params.number_of_bugs) + 1
            }">Take one down</a>
            <p>Patch it around</p>
            <p>${Math.floor(
              Math.random() * 200
            )}  bugs in the code</p>            
        </body>
    </html>
`);
  } else {
    res.send(`
    <html>
        <body>
            <p>${req.params.number_of_bugs} little bugs in the code</p>
            <p>${req.params.number_of_bugs} little bugs</p>
            <a href="/bugs/${req.params.number_of_bugs - 1}">Take one down</a>
            <p>Patch it around</p>
            <p>${Math.floor(
              Math.random() * 200
            )}  bugs in the code</p>            
        </body>
    </html>
`);
  }
});

// Fibonnaci

const checkFibonnaci = (num) => {
  // to check if num is a perfect square number
  const isSquare = (num) => {
    if (Number.isInteger(Math.sqrt(num))) {
      // returns true if square root of num is a whole number
      return true;
    } else {
      // returns false if square root of num is a whole number
      return false;
    }
  };

  // numbers are fibonnaci if 1 or both of (5*n2+4) or (5*n2-4) is a perfect square
  // checks if num if 1 or both of (5*n2+4) or (5*n2-4) is a perfect square
  if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
    return true;
  } else {
    return false;
  }
};

app.get("/fibonnaci/:number", (req, res) => {
  if (checkFibonnaci(req.params.number)) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a fibonacci number.");
  }
});

app.listen(5001);
