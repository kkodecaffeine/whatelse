var DataTypes = require("sequelize").DataTypes;
var _user_info_base = require("./user_info_base");

function initModels(sequelize) {
  var user_info_base = _user_info_base(sequelize, DataTypes);


  return {
    user_info_base,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
