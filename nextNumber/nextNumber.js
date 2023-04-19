function nextNumber(common) {
  let answer;
  const is등차수열 = () => {
    return (
      common[1] - common[0] ===
      common[common.length - 1] - common[common.length - 2]
    );
  };

  if (is등차수열()) {
    let diffrentOfNumber =
      common[common.length - 1] - common[common.length - 2];
    answer = common[common.length - 1] + diffrentOfNumber;
  } else {
    let ratio = common[common.length - 1] / common[common.length - 2];
    answer = common[common.length - 1] * ratio;
  }

  return answer;
}

module.exports = { nextNumber };
