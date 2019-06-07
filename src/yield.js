export function* foo(index) {
  while (index < 2) {
    yield index++;
  }
}

export function* range(a, b, inclusive = false ) {
  let i = a;
  while (inclusive ? i <= b : i < b) {
    yield i++;
  }
}

export const fetchClown = () =>
  new Promise(resolve => setTimeout(() => resolve("🤡"), 250));
