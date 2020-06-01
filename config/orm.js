let connection = require("../config/connection.js");

// ORM
let table = "burgers"

let orm = {
    selectAll: function(callback) {
        let query = "SELECT * FROM " + table;

        connection.query(query, function(err, result) {
            callback(result);
        });
    },
    insertOne: function(){
        let query = "INSERT INTO " + table + " burger_name VALUES ?";
        connection.query(query, burger.name, function( err, result )
        {
        callback(result);
        });
    },
    updateOne: function(callback) {

    }



}
