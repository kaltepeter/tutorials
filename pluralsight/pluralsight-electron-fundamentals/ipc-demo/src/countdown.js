module.exports = function countdown(tick) {
    let count = 3;

    let timer = setInterval(_ => {
       tick(count--);
       console.log('countdwon', count);
       if (count === 0) {
           clearInterval(timer);
       }
    }, 1000);
};