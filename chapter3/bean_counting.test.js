import { expect, test } from "bun:test";
import { countBs, countChar } from "./bean_counting";

test("it counts Bs in a string", () => {
  expect(countBs("BBC")).toBe(2);
});

test("it counts characters in a string", () => {
  expect(countChar("kakkerlak", "k")).toBe(4);
});
