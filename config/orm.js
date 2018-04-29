const connection = require("./connection");

// module.exports obj style
// module.exports = {
//     selectAll : function() {
//         console.log("test: selectAll()");
//         // connection.query("SELECT * FROM burgers", function(error, data) {
//         //     if (error) return res.status(500).end();

//         //     res.json(data);
//         // });
//     }, 
//     insertOne : function() {
//         console.log("test: insertOne()");
    
//         // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(error, result) {
//         //     if (error) return res.status(500).end();

//         //     res.json({id: result.insertId });
//         //     console.log({id: result.insertId});

//         // });
//     },
//     updateOne : function() {
//         console.log("test: updateOne()");
        
//         // connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.plan, req.params.id], function (error, result) {
//         //     if (error) {
//         //         return res.status(500).end();
//         //     } else if ( result.changedRows === 0) {
//         //         return res.status(404).end();
//         //     }
//         //     res.status(200).end();
//         // });

//     }
// }

// function style
function selectAll() {
    console.log("test: selectAll()");

    // connection.query("SELECT * FROM burgers", function(error, data) {
    //     if (error) {
    //         return res.status(500).end();
    //     }

    //     res.json(data);
    // });
}

function insertOne(){
    console.log("test: insertOne()");

    // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(error, results) {
    //     if (error) {
    //         return res.status(500).end();
    //     }
    //     res.json({id: results.insertId});
    //     console.log({id: result.insertId});
    // });
}

function updateOne(){
    console.log("test: updateOne()");

    // connection.query("UPDATE BURGERS SET burger_name = ? WHERE id = ?", [req.body.plan, req.params.id], function(error, result) {
    //     if (error) {
    //         return res.status(500).end();
    //     } else if (result.changedRows === 0) {
    //         return res.status(404).end();
    //     }
    //     res.status(200).end();
    // });
}

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;