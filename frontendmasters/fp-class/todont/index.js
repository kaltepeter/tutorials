import { renderApp } from "./ui";
import { create } from "domain";
import { over, lensProp, remove, append } from "ramda";
import { merge, setIn } from "immutable";

const L = { habits: lensProp("habits") };

const Merge = x => ({
  x,
  concat: other => Merge(Object.assign({}, x, other.x))
});

const create = habit => Fn(ask.map(over(L.habits, append(habit)))); //Object.assign({}, state, {habits: [habit]});
const destroy = ({ idx }) => Fn(ask.map(over(L.habits, remove(idx, 1))));
const setShowPage = Fn(() => Fn.of(({page: "show"})));
const setIndexPage = Fn.of({ index: idx }); //Object.assign({}, state, {page: 'show', index: idx});

const view = setIndexPage.concat(setShowPage);

const route = { create, destroy, view };

// const appLoop = (state) => renderApp({page: 'list', habits: []}, (action, payload) => {
//     console.log("TCL: (action, payload) ", (action, payload));
//     return appLoop(create(state,payload));
// });
const appLoop = state =>
  renderApp(state, (action, payload) => {
    console.log("TCL: (action, payload) ", (action, payload));
    return appLoop(
      Merge(state).concat(Merge(route[action].run(payload)).run(state))
    ).x;
  });

appLoop({ page: "list", habits: [] });
