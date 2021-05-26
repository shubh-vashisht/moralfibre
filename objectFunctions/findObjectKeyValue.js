function findObjectValue(obj, value) {
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr);
    if (arr[i] === value) {
      return obj[arr[i]];
    }
    if (typeof obj[arr[i]] === "object") {
      let a = find(obj[arr[i]], value);
      if (a !== null) {
        return a;
      }
    }
  }
  return null;
}

exports.findObjectValue = findObjectValue;
