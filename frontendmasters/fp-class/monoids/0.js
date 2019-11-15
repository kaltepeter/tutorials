import { QUnit } from "qunit";
import { List } from "immutable-ext";
const _ = require("ramda");

//  Semigroup
// closed + associative = parallel
(() => {
  // associative
  const a = 1 + 2 + 6;
  const b = 1 + (2 + 6);
  const c = 1 + 2 + 6;

  // all same answer

  const d = 2 * 5 * 8; // parenthesis don't change value

  const e = 10 / 4 / 2; // diff answers

  const f = true && true && false;
  const g = true || true || false;
})();

const Sum = x => ({
  x,
  concat: other => Sum(x + other.x)
});

Sum.empty = () => Sum(0);

const Product = x => ({
  x,
  concat: other => Product(x * other.x)
});

Product.empty = x => Product(x);

const Any = x => ({
  x,
  concat: other => Any(x || other.x)
});

const All = x => ({
  x,
  concat: other => All(x && other.x)
});

All.empty = () => All(true);

const Intersection = x => ({
  x,
  concat: other => Intersection(_.intersection(x, other.x))
});

const sum = Sum(3).concat(Sum(5)); // Sum(8)
console.log(sum.x);

console.log(Product(3).concat(Product(5)).x);

const res = [1, 2, 3, 4, 5].map(Sum).reduce((acc, n) => acc.concat(n));
console.log(res.x);
