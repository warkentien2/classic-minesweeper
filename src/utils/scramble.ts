export const scramble = (...args: string[][]): string[] => {
  const weights: { [key: string]: number } = {};
  const arraysToScramble = [...args]; // copy the args
  const totalTiles = arraysToScramble.reduce((acc, arg) => acc + arg.length, 0);
  const scrambledArray: string[] = [];

  // set proportional interval 0-1 for each arg
  // const a = [1, 2, 3, 4];
  // const b = [5, 6, 7];
  // const c = [8, 9];
  // const d = [10];
  // weights = { 0: 0.4, 1: 0.7, 2: 0.9, 1: 1 }
  // -------------------------------
  // so if a run Math.random(), there's a:
  // - 40% chance it'll draw from const a, falling between 0 and 0.4
  // - 30% chance it'll draw from const b, falling between 0.4 and 0.7
  // - 20% chance it'll draw from const c, falling between 0.7 and 0.9
  // - 10% chance it'll draw from const d, falling between 0.9 and 1

  arraysToScramble.forEach((arg, i) => {
    if (i === 0) {
      weights[`${i}`] = arg.length / totalTiles;
    } else {
      weights[`${i}`] = arg.length / totalTiles + weights[`${i - 1}`];
    }
  });

  while (scrambledArray.length < totalTiles) {
    const random = Math.random();

    for (const key in weights) {
      if (random < weights[key] && arraysToScramble[parseInt(key)].length > 0) {
        const selectedArray = arraysToScramble[parseInt(key)];
        const randomIndex = Math.floor(Math.random() * selectedArray.length);
        scrambledArray.push(selectedArray[randomIndex]);
        arraysToScramble[parseInt(key)].splice(randomIndex, 1);
        break;
      }
    }
  }

  return scrambledArray;
};
