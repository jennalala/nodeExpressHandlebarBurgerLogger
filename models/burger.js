var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", cb);
  },
  // all: function(cb) {
  //   orm.all("burger", function(res) {
  //     cb(res);
  //   });
  // },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, cb);
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;