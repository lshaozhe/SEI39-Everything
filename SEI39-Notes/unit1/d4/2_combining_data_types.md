[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Combining data types

## Lesson Objectives

1. Looping with nested arrays/objects
1. Combine objects, arrays, and functions more than one level deep

## Looping with nested arrays/objects

You can loop over an array in an object

```javascript
const foo = {
  someArray: [1, 2, 3],
};

for (const element of foo.someArray) {
  console.log(element);
}

//same as above
for (let i = 0; i < foo.someArray.length; i++) {
  console.log(foo.someArray[i]);
}
```

You can loop over an array in an array.  Just add an additional [*index*] after the first [*index*]

```javascript
const foo = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"],
];

for (const row of foo) {
  for (const element of row) {
    console.log(element);
  }
}

//same as above
for (let i = 0; i < foo.length; i++) {
  for (let j = 0; j < foo[i].length; j++) {
    console.log(foo[i][j]);
  }
}

```

## Combine objects, arrays, and functions more than one level deep

You can create a function that returns an object.  Just add the `.` after the `()` since the return value of the function is an object

```javascript
const foo = () => {
  return {
    someProperty: "hi!",
  };
};

foo().someProperty; // => hi
```

You can create a function that returns an array.  Just add `[index]` after the `()` since the return value of the function is an array

```javascript
const foo = () => {
  return ["apple", "banana", "pear"];
};

foo()[1]; // => banana
```

You can create a function that returns an object that has an array

```javascript
const foo = () => {
  return {
    someArray: ["fun", "awesome", "sweet"],
  };
};

foo().someArray[1]; // => awesome
```

You can create a function that returns an object that has an object

```javascript
const foo = () => {
  return {
    someObject: {
      someProperty: "some value",
    },
  };
};

foo().someObject.someProperty; // => some value
```

You can create a function that returns an object that has a method

```javascript
const foo = () => {
  return {
    someMethod: () => {
      console.log("oh hai!");
    },
  };
};

foo().someMethod(); // logs 'oh hai!'
```

You can create a function that returns a function.  Just add the `()` after the first `()` since the return value of the first function is another function

```javascript
const foo = () => {
  return () => {
    console.log("whaaaa?");
  };
};

foo()(); // logs 'whaaaa?'
```

You can create an object that has a method that returns an object

```javascript
const foo = {
  someMethod: () => {
    return {
      someProperty: "some value",
    };
  },
};

foo.someMethod().someProperty;
```

You can create an object that has a method that returns an object that has an array

```javascript
const foo = {
  someMethod: () => {
    return {
      someArray: ["peach", "apple", "pear"],
    };
  },
};

foo.someMethod().someArray[2]; // => pear
```

You can create an object that has a method that returns an object that has an object

```javascript
const foo = {
  someMethod: () => {
    return {
      someObject: {
        someProperty: "some value",
      },
    };
  },
};

foo.someMethod().someObject.someProperty; // => some value
```

You can create an object that has a method that returns an object that has another method

```javascript
const foo = {
  someMethod: () => {
    return {
      someMethod: () => {
        console.log("both methods can have the same name!");
      },
    };
  },
};

foo.someMethod().someMethod(); //logs 'both methods can have the same name!'
```

You can create an object that has a method that returns a function

```javascript
const foo = {
  someMethod: () => {
    return () => {
      console.log("hi");
    };
  },
};
foo.someMethod()(); // logs hi
```

You can create an array that has a function that returns an object

```javascript
const foo = [
  1,
  "apple",
  () => {
    return {
      someProperty: "some value",
    };
  },
];

foo[2]().someProperty; // => some value
```

You can create an array that has a function that returns an object that has an array

```javascript
const foo = [
  1,
  "apple",
  () => {
    return {
      someArray: ["cat", "dog", "baboon"],
    };
  },
];

foo[2]().someArray[2]; // => baboon
```

You can create an array that has a function that returns an object that has an object

```javascript
const foo = [
  1,
  "apple",
  () => {
    return {
      someObject: {
        someProperty: "some value",
      },
    };
  },
];

foo[2]().someObject.someProperty; // => some value
```

You can create an array that has a function that returns an object that has a method

```javascript
const foo = [
  1,
  "apple",
  () => {
    return {
      someMethod: () => {
        console.log("fun");
      },
    };
  },
];

foo[2]().someMethod(); //logs fun
```

You can create an array that has a function that returns a function

```javascript
const foo = [
  1,
  "apple",
  () => {
    return () => {
      console.log("yes!");
    };
  },
];

foo[2]()(); //logs yes!
```

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
