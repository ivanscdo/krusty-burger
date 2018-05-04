// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

const connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();

// END OF: function printQuestionMarks(num) {
}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var ORM = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if (error) throw error;

            cb(result);
        });
    }
// END OF: var ORM = {
}

module.exports = ORM;





// // // TEST: 1, before 15.1 
// // module.exports obj style - module.exports obj style - module.exports obj style -
// // module.exports = {
// //     selectAll : function() {
// //         console.log("test: selectAll()");
// //         // connection.query("SELECT * FROM burgers", function(error, data) {
// //         //     if (error) return res.status(500).end();

// //         //     res.json(data);
// //         // });
// //     }, 
// //     insertOne : function() {
// //         console.log("test: insertOne()");
    
// //         // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(error, result) {
// //         //     if (error) return res.status(500).end();

// //         //     res.json({id: result.insertId });
// //         //     console.log({id: result.insertId});

// //         // });
// //     },
// //     updateOne : function() {
// //         console.log("test: updateOne()");
        
// //         // connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.plan, req.params.id], function (error, result) {
// //         //     if (error) {
// //         //         return res.status(500).end();
// //         //     } else if ( result.changedRows === 0) {
// //         //         return res.status(404).end();
// //         //     }
// //         //     res.status(200).end();
// //         // });

// //     }
// // }



// // function style - function style - function style - function style - function style - 
// function selectAll() {
// // function selectAll(req, res) {
    
//     // // // attempt 1
//     // connection.query("SELECT * FROM burgers", function(error, data) {
//     //     if (error) {
//     //         return res.status(500).end();
//     //     }
//     //     console.log("orm.js: ", data)
//     //     // res.json(data);
//     //     return data;
//     //     // res.render(data)
//     // });

//     // // // attempt 2
//     connection.query("SELECT * FROM burgers", function(err, data) {
//         if (err) {
//               return res.status(500).end();
//         }
//         console.log("orm.js: ", data);
//         // res.render("index", {burgers: data});
//         return data;
//     });
//   console.log("calling func: selectAll()");

//     // // // TEST: promises 
//     // connection.query("SELECT * FROM burgers").then(data => {
//     //     console.log("inside .then()");
//     //     return data;
//     // })
//     // console.log("calling func: selectAll()");
    



// //END OF: function selectAll() {
// }


// function insertOne(){
//     console.log("test: insertOne()");

//     // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(error, results) {
//     //     if (error) {
//     //         return res.status(500).end();
//     //     }
//     //     res.json({id: results.insertId});
//     //     console.log({id: result.insertId});
//     // });
// }

// function updateOne(){
//     console.log("test: updateOne()");

//     // connection.query("UPDATE BURGERS SET burger_name = ? WHERE id = ?", [req.body.plan, req.params.id], function(error, result) {
//     //     if (error) {
//     //         return res.status(500).end();
//     //     } else if (result.changedRows === 0) {
//     //         return res.status(404).end();
//     //     }
//     //     res.status(200).end();
//     // });
// }

// module.exports.selectAll = selectAll;
// module.exports.insertOne = insertOne;
// module.exports.updateOne = updateOne;