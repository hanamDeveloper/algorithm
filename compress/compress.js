const alphabetObject = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function compress(msg) {
  const answer = [];
  let word = "";
  let idx = 27;

  for (let key of msg) {
    const wordKey = word + key;
    if (alphabetObject[wordKey]) {
      word = wordKey;
    } else {
      answer.push(alphabetObject[word]);
      alphabetObject[wordKey] = idx++;

      word = key;
    }
  }

  answer.push(alphabetObject[word]);

  return answer;
}

module.exports = { compress };
