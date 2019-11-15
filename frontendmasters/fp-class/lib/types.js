const Id = x => x;
const Task = {};

const Either = (() => {
	const Right = x =>
	({
	  chain: f => f(x),
	  ap: other => other.map(x),
	  alt: other => Right(x),
	  extend: f => f(Right(x)),
	  concat: other =>
		other.fold(x => other,
				   y => Right(x.concat(y))),
	  traverse: (of, f) => f(x).map(Right),
	  map: f => Right(f(x)),
	  fold: (_, g) => g(x),
	  toString: () => `Right(${x})`
	})

	const Left = x =>
	({
	  chain: _ => Left(x),
	  ap: _ => Left(x),
	  extend: _ => Left(x),
	  alt: other => other,
	  concat: _ => Left(x),
	  traverse: (of, _) => of(Left(x)),
	  map: _ => Left(x),
	  fold: (f, _) => f(x),
	  toString: () => `Left(${x})`
	})

	const of = Right;
	const tryCatch = f => {
		try {
			return Right(f())
		} catch(e) {
			return Left(e)
		}
	}
	
	const fromNullable = x =>
		x != null ? Right(x) : Left(x)
	
	return {Right, Left, of, tryCatch, fromNullable }
})()

module.exports = {
    ...Id,
    ...Task,
    ...Either
}