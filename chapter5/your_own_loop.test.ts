import { loop } from "./your_own_loop";
import { expect, test } from "bun:test";

test("loops", () => {
  const updateFunction = (n: number) => n - 1;
  const testFunction = (n: number) => n > 0;

  expect(loop(3, testFunction, updateFunction, console.log)).toEqual(undefined);
});
