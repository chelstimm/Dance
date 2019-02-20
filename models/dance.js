// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dance = {

    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (dance_name, callback) {
        orm.insertOne(dance_name, function (res) {
            callback(res);
        });
    },

    updateOne: function (dance_id, callback) {
        orm.updateOne(dance_id, function (res) {
            callback(res);
        });
    }

};



// Export the database functions for the controller (catsController.js).
module.exports = dance;
