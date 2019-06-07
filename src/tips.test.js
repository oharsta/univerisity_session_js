it("filter falsy", () => {
  const arr = [1, 0, undefined, null, false, true, "", "a"];
  expect(arr.filter(Boolean)).toStrictEqual([1, true, "a"]);
});

it("is required", () => {
  const isRequired = () => {
    throw new Error("param is required")
  };
  const hello = (name = isRequired()) => name;

  expect(hello).toThrow(Error);
  expect(hello("okke")).toBe("okke");
});

it("destructuring aliases", () => {
  const obj = {x: 1, y: 2};

  const {x} = obj;
  expect(x).toBe(1);

  const {x: otherName} = obj;
  expect(otherName).toBe(1);
});

it("destructuring arrays", () => {
  const winners = [
    {name: "Mary", time: 110},
    {name: "Joe", time: 115},
    {name: "Pete", time: 120}
  ];
  const [{time: bestTime}, ...daniel] = winners;
  expect(bestTime).toBe(110);
  expect(daniel.reduce((acc, x) => acc.concat(x.time), [])).toStrictEqual([115, 120]);

  const [{time: firstTime}] = winners;
  expect(firstTime).toBe(110);

  const [, , three] = [1, 2, 3, 4, 5, 6, 7];
  expect(three).toBe(3);
});

it("multiple returns", () => {
  const f = a => [1, 2];
  const [x, y] = f();

  expect(x).toBe(1);
  expect(y).toBe(2);
});

it("url search parameters", () => {
  const urlParams = new URLSearchParams("post=1234&action=edit");

  expect(urlParams.has("post")).toBe(true);
  expect(urlParams.get("action")).toBe("edit");

  const editArray = urlParams.getAll("action")[0];
  expect(editArray).toBe("edit");

  urlParams.append("active", "1");
  // code assist urlParams.
  expect(urlParams.toString()).toBe("post=1234&action=edit&active=1");
});

