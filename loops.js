function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange string.")
    } else {
      array.push(`I am ${i} strange string.`)
      return array
    }
  }
}
