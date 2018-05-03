// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

let ORM = require("../config/orm");

// TEST: testing connections
// ORM.selectAll();
// ORM.insertOne();
// ORM.updateOne();
// console.log(ORM.selectAll()) 

// Q:when would I select all??? A: when I'm at the homepage!

// function callbackTest() {
//     console.log("calling callbacTest()");
//     // callback();
//     // console.log("callbackTest():", ORM.selectAll());
//     // if ( ORM.selectAll() !== undefined ){
//     //     return ORM.selectAll()
//     // }
//     console.log("cbTest: ", ORM.selectAll())
//     return ORM.selectAll;
// }
// module.exports.callbackTest = callbackTest;


module.exports.selectAll = ORM.selectAll;