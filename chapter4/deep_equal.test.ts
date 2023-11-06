import { expect, test } from "bun:test";
import { deepEqual } from "./deep_equal";

test("returns comparison of numbers", () => {
  expect(deepEqual(1, 1)).toBeTrue();
});

test("returns comparison of nulls", () => {
  expect(deepEqual(1, null)).toBeFalsy();
});

test("returns comparison of objects", () => {
  const a = { here: { is: "an" }, object: 2 };
  const b = { here: 1, object: 2 };
  expect(deepEqual(a, b)).toEqual(false);
  expect(deepEqual(a, a)).toEqual(true);
});
