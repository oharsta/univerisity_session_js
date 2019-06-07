import {foo, range, fetchClown} from "./yield";

it("works", () => {
  const iterator = foo(0);

  expect(iterator.next().value).toBe(0);
  expect(iterator.next().value).toBe(1);

  expect(iterator.next().done).toBe(true);
});

it("range", () => {
  expect(Array.from(range(3, 8))).toStrictEqual([3, 4, 5, 6, 7]);
  expect(Array.from(range(3, 8, true))).toStrictEqual([3, 4, 5, 6, 7, 8]);
});

it("awaits", async () => {
  const res = await fetchClown();
  expect(res).toBe("🤡");
});

