const { twoSum } = require("./twoSum");

describe("twoSum", () => {
  it("지정된 입력에 대한 올바른 인덱스를 반환합니다", () => {
    const nums = [
      2, 7, 11, 15, 20, 25, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 30, 31, 32, 33,
      34, 35, 36, 37, 38, 39, 40,
    ];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  it("일치하는 쌍을 찾을 수 없는 경우 빈 배열을 반환합니다", () => {
    const nums = [2, 7, 11, 15];
    const target = 5;
    const expected = [];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  it("입력 배열이 중복된 숫자인지 확인합니다.", () => {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });
});
