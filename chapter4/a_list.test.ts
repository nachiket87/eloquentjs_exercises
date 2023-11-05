import { expect, test } from "bun:test";
import { nth, arrayToList, listToArray, prepend } from "./a_list";

test("returns a list when given an array", () => {
  expect(arrayToList([1, 2, 3])).toEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  });
});

test("converts list to array", () => {
  expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
});

test("returns prepended list", () => {
  expect(prepend(10, prepend(20, null))).toEqual({ value: 10, rest: { value: 20, rest: null } });
});

test("recursively finds nth value in an array", () => {
  expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20);
});
