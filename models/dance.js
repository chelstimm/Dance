// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dance = {

    selectAll: function (cb) {
        orm.selectAll("dances", function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne("dances", cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("dances", objColVals, condition, function (res) {
            cb(res);
        });
    },
}


module.exports = dance;
