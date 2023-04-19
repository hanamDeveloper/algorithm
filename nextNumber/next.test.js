const { nextNumber } = require("./nextNumber");

test("test nextNumber function", () => {
  // 등차수열 테스트
  expect(nextNumber([1, 3, 5])).toBe(7);
  expect(nextNumber([3, 6, 9, 12])).toBe(15);
  expect(nextNumber([-5, -2, 1, 4, 7])).toBe(10);

  // 등비수열 테스트
  expect(nextNumber([2, 4, 8])).toBe(16);
  expect(nextNumber([1, 2, 4, 8])).toBe(16);
  expect(nextNumber([4, 12, 36])).toBe(108);
});
