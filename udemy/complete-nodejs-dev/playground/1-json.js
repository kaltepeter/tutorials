const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
const me = {
    name: 'Kayla',
    age: 34
}
const newData = {...user, ...me};
const userJSON = JSON.stringify(newData);
fs.writeFileSync('1-json.json', userJSON);

