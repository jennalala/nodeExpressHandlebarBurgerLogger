var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burger", cb);
  },
  // The variables cols and vals are arrays.
  create: function (obj, cb) {
    orm.create("burger", Object.keys(obj), Object.values(obj), cb);
  },
  updateById: function (id, objColVals, cb) {
    const condition = "id = " + id;
    orm.update("burger", objColVals, condition, cb);
  },
  delete: function (condition, cb) {
    orm.delete("burger", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
