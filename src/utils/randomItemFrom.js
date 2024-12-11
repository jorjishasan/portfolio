const randomItemFrom = (a, b) => {
  // If only one argument is provided, treat it as an array
  if (b === undefined) {
    if (!Array.isArray(a) || a.length === 0) {
      throw new Error("Please provide a non-empty array");
    }
    const randomIndex = Math.floor(Math.random() * a.length);
    return a[randomIndex];
  }

  // If two arguments are provided, treat them as a range
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("When providing two arguments, both must be numbers");
  }

  // Ensure a is smaller than b
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // Generate random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomItemFrom;
