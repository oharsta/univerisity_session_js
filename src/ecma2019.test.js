import {optionalCatchBinding, superSymbol} from "./ecma2019";

it("catches", () => {
  expect(optionalCatchBinding()).toBe(true);
});

it("describes", () => {
  expect(superSymbol.description).toBe("My Super Symbol");
});

it("toString", () => {
  const f = s => `${s}`;
  expect(f.toString()).toBe("s => `${s}`");
  expect(f(1)).toBe("1");
});

it("fromEntries", () => {
  const arr = [["name", "Okke"], ["age", 28]];
  expect(Object.fromEntries(arr)).toStrictEqual({name: "Okke", age: 28});
});

it("trimming", () => {
  expect("   nice   ".trimStart()).toBe("nice   ");
  expect("   nice   ".trimLeft()).toBe("nice   ");

  expect("   nice   ".trimEnd()).toBe("   nice");
  expect("   nice   ".trimRight()).toBe("   nice");
});

it("flattens", () => {
  expect([1, 2, [[3, [[4]]], [5, 6]]].flat(Infinity)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

it("flatmap", () => {
  expect([1, 2, 3].flatMap(x => [x * 2])).toStrictEqual([2, 4, 6]);
});

it("named capture groups", () => {
  const
    reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
    match = reDate.exec("2018-04-30"),
    year = match.groups.year,
    month = match.groups.month,
    day = match.groups.day;

  expect(year).toBe("2018");
  expect(month).toBe("04");
  expect(day).toBe("30");
});

it("positive lookbehind assertion", () => {
  //For a positive lookbehind assertion,
  //the text preceding the current location must match the assertion
  const regDollarPrefix = /(?<=\$)foo/g;
  expect("foo $foo %foo foo".replace(regDollarPrefix, "bar")).toBe("foo $bar %foo foo");
});
