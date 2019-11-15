import {Task} from './Task';
import {compose} from 'ramda';

const Box = f => ({
    map: g => Box(compose(f,g)),
    fold: f => f(x),
    toString: `Box(${x})`
});

// Box(() =>  2).map(two => two + 1).fold(x => x);

Task.of(2).map(two => two + 1);

const t1 = Task((rej, res) => res(2))
    .map(two => two + 1)
    .map(three => three * 2);

t1.fork(console.error, console.log);