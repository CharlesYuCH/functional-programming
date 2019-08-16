

export const compose = (...fns) => {
  return function next(arg) {
    let result = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
};
