const _ = require("lodash");

const TaskEither = TaskT(Either);

const users = [
  { id: 1, name: "Brian" },
  { id: 2, name: "Mark" },
  { id: 3, name: "Kayla" }
];
const following = [
  { user_id: 1, follow_id: 3 },
  { user_id: 1, follow_id: 2 }
];

const find = (table, query) =>
  TaskEither.lift(Either.fromNullable(_.find(table, query)));

// const app = () => find(users, {id: 1})
//     .chain(eu => eu
//         .fold(Task.rejected, u => find(following, {follow_id: u.id})))
//     .chain(eu => eu
//         .fold(Task.rejected, fo => find(users, {id: fo.user_id})))
//         .fork(console.error, eu => eu.fold(console.error, console.log))

const app = () =>
  find(users, { id: 1 })
    .chain(u => find(following, { follow_id: u.id }))
    .chain(fo => find(users, { id: fo.user_id }))
    .fork(console.error, eu => eu.fold(console.error, console.log));
