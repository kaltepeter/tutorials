const fs = require('fs');

const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f,g) => g(x),
    toString: `Right(${x})`
});

const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f,g) => f(x),
    toString: `Left(${x})`
});

// const getPort = () => {
//     try {
//         const str = fs.readFileSync('config.json');
//         const config = JSON.parse(str);
//         return config.port;
//     } catch(e) {
//         return 3000
//     }
// }

const tryCatch = f => {
    try {
        return Right(f());
    } catch(e) {
        return Left(e);
    }
}

const readFileSync = path => tryCatch(() => fs.readFileSync(path));
const parseJSON = contents => tryCatch(() => JSON.parse(contents));

const getPort = () => 
    readFileSync('config.json')
        .chain(contents => parseJSON(contents))
        .map(config => config.port)
        .fold(() => 8080, x => x);

const res = getPort();

console.log(res);