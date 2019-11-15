const {taggedSum} = require('daggy');
const {liftF} = require('../lib/free.js');

const Http = taggedSum('Http', {Get: ['url'], Post: ['url', 'body']});
// console.log(Http.get('/home'));

// Get('/home').cata({
//     Get: url => get()
// })

const httpGet = (url) => liftF(Http.Get(url));
const httpPost = (url, body) => liftF(Http.Post(url, body));

const app = () => httpGet('/home')
    .chain(contents => httpPost('/analytics', contents));

const intrepret = x => x.cata({
    Get: url => Id.of(`contents for ${url}`),
    Post: (url, body) => Id.of(`posted ${body} for ${url}`)
})

const res = app().foldMap(intrepret, Id.of);

console.log(res);