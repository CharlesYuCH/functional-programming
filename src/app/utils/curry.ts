export const curry = (fn, n = fn.length, args = []) => n === 0 ? fn(...args) : (...args1) => curry(fn, n - args1.length, [...args, ...args1]);
