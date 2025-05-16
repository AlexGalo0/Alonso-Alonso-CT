function buildFrequencyMap(nums) {
  const uniqueElements = new Map();

  for (const num of nums) {
    if (uniqueElements.has(num)) {
      const currentCount = uniqueElements.get(num); 
      uniqueElements.set(num, currentCount + 1); // increease in case already exists
    } else {
      uniqueElements.set(num, 1);
    }
  }

  return uniqueElements;
}

function sumUniqueValues(frequencyMap) {
  let sum = 0;
  for (const [key, value] of frequencyMap) { //destrucsture the map
    // key is the number and value is the frequency
    if (value === 1) {
      sum += key;
    }
  }
  return sum;
}

function sumOfUniqueElements(nums) {
  const frequencyMap = buildFrequencyMap(nums);
  return sumUniqueValues(frequencyMap);
}

console.log(sumOfUniqueElements([1,2,3,2,4,4,4])); //should return 1+3 = 4
console.log(sumOfUniqueElements([5,5,5,5,5])); //0 all the elements are duplicates
console.log(sumOfUniqueElements([1,2,3,4,5])); //15 all the elements are unique
