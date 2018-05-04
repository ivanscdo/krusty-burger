// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

let ORM = require("../config/orm");

var burger = {
    all: function(cb) {
        ORM.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        ORM.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }, 
    update: function(objColVals, condition, cb) {
        ORM.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })

    } 
};

module.exports = burger; 




// // // TEST: before 15.1 
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
// module.exports.selectAll = ORM.selectAll;


