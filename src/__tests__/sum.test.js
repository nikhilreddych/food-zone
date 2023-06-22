import sum from "../components/sum";

test("Test sum function to add 2 numbers", () => {
  expect(sum(2, 5)).toBe(7);
});

test("Test arguments availability", () => {
  expect(sum()).toBe("parameters should have value");
});

test("Test arguments are numbers", () => {
  expect(sum(3, "xyz")).toBe("both arguments should be valid numbers");
});
