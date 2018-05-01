let ORM = require("../config/orm");

// ORM.selectAll();
// ORM.insertOne();
// ORM.updateOne();

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// Q:when would I select all??? A: when I'm at the homepage!


// console.log(ORM.selectAll()) 


// function callbackTest(callback) {
//     console.log("calling func: callbacTest(): " + callback);
//     // ORM.selectAll();


// }

module.exports.selectAll = ORM.selectAll;
// module.exports.callbackTest = callbackTest;