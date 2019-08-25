require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5d620864797ec54f39e0703e", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => console.log(result))
  .catch(err => console.error(err));
