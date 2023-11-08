import { flatten } from "./flattening";
import { expect, test } from "bun:test";

test("flattens an array", () => {
  const arrays = [[1, 2, 3], [4, 5], [6]];
  expect(flatten(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
});
