var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", cb);
  },
  // all: function(cb) {
  //   orm.all("burger", function(res) {
  //     cb(res);
  //   });
  // },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, cb);
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, cb);
  },
};

// Export the database functions for the controller
module.exports = burger;