const {toUpper,view,over,lensProp,compose} = require('ramda');

const L = {
    name: lensProp('name'),
    street: lensProp('street'),
    address: lensProp('address'),
}

const user = {address: {street: {name: 'Maple'}}};
console.log(view(compose(L.address, L.street), user));

const addrStreetName = compose(L.address, L.street, L.name);
const res = over(addrStreetName, toUpper, user);
console.log(res);