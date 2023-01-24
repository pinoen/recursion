function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftSubArr = arr.slice(0, midIndex);
  const rightSubArr = arr.slice(midIndex);

  return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return result;
};

console.log(mergeSort([54]))
console.log(mergeSort([10, 7, 8, 77, -5, 9, 1, 5]));
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55, 58, 89, 74])); 