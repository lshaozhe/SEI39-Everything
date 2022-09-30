const useCompare = (inputA, inputB) => {
  if (inputA.length === 0 || inputB.length === 0) return "";

  try {
    // try to parse the input strings, will throw an error if can't be parsed
    const arrayA = JSON.parse(inputA);
    const arrayB = JSON.parse(inputB);

    // if the 2 items are not arrays throw an error. This error will be caught by the catch below.
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) throw SyntaxError;

    if (JSON.stringify(arrayA.sort()) === JSON.stringify(arrayB.sort())) {
      return "Arrays are the same";
    }

    return "Arrays are different";
  } catch (error) {
    // if the items are not arrays
    if (error.name === "SyntaxError") {
      return "Please ensure that inputs are arrays";
    }

    // else
    return "An unexpected error has occurred";
  }
};

export default useCompare;
