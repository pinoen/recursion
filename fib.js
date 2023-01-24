function fibs(number) {
  let arr = [0, 1]
  if (number === 0) return []
  if (number === 1) return [0]
  if (number === 2) return [0, 1]
  if (number > 2) {

    for (let i = 2; i < number; i++) {
      let x = arr[i - 1] + arr[i - 2]
      arr.push(x)
    }
    return arr;
  }
}

console.log(fibs(8))

function fibsRecursion(number) {
  if (number < 2) {
    return number
  } else {
    return (fibsRecursion(number - 1) + fibsRecursion(number - 2))
  }
}
console.log(fibsRecursion(8))