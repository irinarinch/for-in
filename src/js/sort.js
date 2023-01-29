export default function orderByProps(obj, arr) {
  let result = [];
  const firstArray = [];
  const secondArray = [];

  arr.forEach((item) => {
    for (const key in obj) {
      if (key === item) {
        firstArray.push({
          key,
          value: obj[key],
        });
      }
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      secondArray.push({
        key,
        value: obj[key],
      });
    }
  }

  secondArray.sort((a, b) => (a.key > b.key ? 1 : -1));

  result = result.concat(firstArray, secondArray);
  return result;
}
