const sum = (a, b) => {
  if (a === undefined || a === null || b === undefined || b === null) {
    return "parameters should have value";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "both arguments should be valid numbers";
  }

  return a + b;
};

export default sum;
