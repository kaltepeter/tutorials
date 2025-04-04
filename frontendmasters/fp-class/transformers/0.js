const {Task} = require('immutable-ext');
const {Either} = require('./lib/types');

const Compose = (F,G) => {
    const M = fg => ({
        extract: () => fg,
        map: f => M(gf.map(g => g.map(f)))
    })
    M.of = x => M(F.of(G.of(x)));
    return M;
}

const TaskEither = Compose(Task,Either);

TaskEither.of(2)
    .map(two => two * 10)
    .map(twenty => twenty + 1)
    .extract()
    .fork(console.error, either => either.fold(console.error, console.log));