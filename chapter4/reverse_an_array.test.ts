import { expect, test } from "bun:test";
import { reverseArray } from "./reverse_an_array";

test("reverses an array of strings", () => {
  expect(reverseArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
});

test("reverses an array of numbers", () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});
