import { Id, Task, Either } from "../lib/types";
const { Left, Right } = Either;

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

const Alternative = ex => ({
    ex,
    concat: other => Alternative(other.ex.isLeft ? ex : ex.concat(other.ex))
})

Id.of(Sum(2)).concat(Id.of(Sum(3))); // Id(Sum(5))

const res = Alternative(Right('hi'))
    .concat(Alternative(Right('!!!!')))
    .concat(Alternative(Left('bye')));
console.log(res);

const res2 = List([Right('a'), Right('b'), Left('c')])
    .foldMap(Alternative, Alternative(Right('')));
console.log(res2);

export default {};