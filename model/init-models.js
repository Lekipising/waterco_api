var DataTypes = require("sequelize").DataTypes;
var _billing = require("./billing");
var _customer = require("./customer");
var _payment = require("./payment");
var _premise = require("./premise");
var _route = require("./route");
var _sector = require("./sector");
var _user = require("./user");
var _zone = require("./zone");

function initModels(sequelize) {
  var billing = _billing(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var premise = _premise(sequelize, DataTypes);
  var route = _route(sequelize, DataTypes);
  var sector = _sector(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var zone = _zone(sequelize, DataTypes);

  payment.belongsTo(billing, { as: "bill", foreignKey: "billid"});
  billing.hasMany(payment, { as: "payments", foreignKey: "billid"});
  payment.belongsTo(billing, { as: "Premise", foreignKey: "PremiseId"});
  billing.hasMany(payment, { as: "Premise_payments", foreignKey: "PremiseId"});
  billing.belongsTo(premise, { as: "Premise", foreignKey: "PremiseId"});
  premise.hasMany(billing, { as: "billings", foreignKey: "PremiseId"});
  premise.belongsTo(route, { as: "Route", foreignKey: "Routeid"});
  route.hasMany(premise, { as: "premises", foreignKey: "Routeid"});
  billing.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(billing, { as: "billings", foreignKey: "UserID"});

  return {
    billing,
    customer,
    payment,
    premise,
    route,
    sector,
    user,
    zone,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
