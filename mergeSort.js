function mergeSort(arr) {
  if (arr.length === 0) return []
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftSubArr = arr.slice(0, mid);
  const rightSubArr = arr.slice(mid);

  return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function merge(arr1, arr2) {
  const result = [];
  let iL = 0;
  let iR = 0;

  while (iL < arr1.length && iR < arr2.length) {
    if (arr1[iL] < arr2[iR]) {
      result.push(arr1[iL]);
      iL++;
    } else {
      result.push(arr2[iR]);
      iR++;
    }
  }
  while (iL < arr1.length) {
    result.push(arr1[iL]);
    iL++;
  }
  while (iR < arr2.length) {
    result.push(arr2[iR]);
    iR++;
  }
  return result;
};

console.log(mergeSort([]))
console.log(mergeSort([10, 7, 8, 77, -5, 9, 1, 5]));
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55, 58, 89, 74])); 