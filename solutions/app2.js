const sorterPromise = (array) => {
  return new Promise((resolve, reject) => {
    const stringArray = array.sort(function (a, b) {
      if (typeof a !== "string" || typeof b !== "string") {
        reject("Error: Not all elements are string type!");
      }
      return a.localeCompare(b);
    });
    return resolve(stringArray);
  });
};

export default sorterPromise;
