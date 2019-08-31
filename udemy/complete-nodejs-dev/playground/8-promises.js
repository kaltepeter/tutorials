const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Things went wrong!");
    // resolve([7, 4, 1]);
    reject("New error");
  }, 2000);
});

doWorkPromise
  .then(result => {
    console.log(`Success! ${result}`);
  })
  .catch(error => {
    console.error("Error!", error);
  });

//
//                              fulfilled
//                             /
// Promise      -- pending -->
//                             \
//                              rejected
//

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then(sum => {
//     console.log(sum);
//     add(sum, 5)
//       .then(sum2 => console.log(sum2))
//       .catch(err => console.error(err));
//   })
//   .catch(err => {
//     console.error(err);
//   });

add(1, 2)
  .then(sum => {
    console.log(sum);
    return add(sum, 4);
  })
  .then(sum => console.log(sum))
  .catch(err => console.error(err));
