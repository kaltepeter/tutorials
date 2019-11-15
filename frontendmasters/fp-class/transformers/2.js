const FnTask = FnT(Task);
const App = EitherT(FnTask);

const res = App.of(2).map(x => x + 1);
console.log(res
    .fold(console.error, fn => fn.run({myEnv: true})
    .fork(console.error, console.log)));

console.log(App.of(2)
        .chain(two => App.lift(TaskEither.lift(Either.of(two + two))))
        .chain(four => App.lift(TaskEither.lift(Either.of(four))))
        .chain(four => App.lift(Task.of(four).map(Either.of)))
        .run({})
        .fork(console.error, fi => fi.fold(console.error, console.log))
);