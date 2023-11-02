import { expect, test } from "bun:test";
import { range, sum } from "./sum_of_range";

test("creates an array with start and end", () => {
  expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("creates an array with start and end with step", () => {
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});

test("creates an array with start and end with negative step", () => {
  expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
});

test("adds the total of a array", () => {
  expect(sum(range(1, 10))).toEqual(55);
});
