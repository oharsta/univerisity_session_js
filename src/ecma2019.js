export const optionalCatchBinding = () => {
  try {
    throw new Error("error");
  } catch {
    return true;
  }
};

export const superSymbol = Symbol("My Super Symbol");