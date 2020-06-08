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
    updateOne: function(table, objColVal, condition, callback) {
        let query = "UPDATE " + table;
        query += " SET ";
        query += objToSql(objColVal);
        query += " WHERE ";
        query += condition;
    
        console.log(query);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            callback(result);
    }); 
    }

}

module.exports = orm;
