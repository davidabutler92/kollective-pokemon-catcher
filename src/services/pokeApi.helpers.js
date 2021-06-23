export function getRandomInt(min, max) {
  const randomIntegerArr = [];
  for (let i = 0; i < 10; i++) {
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    randomIntegerArr.push(randomInteger);
  }
  return randomIntegerArr;
}
