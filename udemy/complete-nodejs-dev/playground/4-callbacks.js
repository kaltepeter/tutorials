setTimeout(() => {
    console.log('Two seconds are up!');
}, 2000);

const names = ['Andrew', 'Jon', 'Jess'];
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
        callback(data);
    }, 2000);
};

// geocode('Philidelphia', (data) => {
//     console.log(data);
// });

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error.');
        callback(undefined, [1, 4, 7]);
    }, 2000);
};

doWorkCallback((error, result) => {
    if (error) {
        return console.error(error);
    }
    console.log(result);
});