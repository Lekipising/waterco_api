var DataTypes = require("sequelize").DataTypes;
var _billing = require("./billing");
var _customer = require("./customer");
var _payment = require("./payment");
var _plant = require("./plant");
var _premise = require("./premise");
var _route = require("./route");
var _sector = require("./sector");
var _user = require("./user");
var _zone = require("./zone");

function initModels(sequelize) {
  var billing = _billing(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var plant = _plant(sequelize, DataTypes);
  var premise = _premise(sequelize, DataTypes);
  var route = _route(sequelize, DataTypes);
  var sector = _sector(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var zone = _zone(sequelize, DataTypes);

  billing.belongsTo(billing, { as: "Premise", foreignKey: "PremiseId"});
  billing.hasMany(billing, { as: "billings", foreignKey: "PremiseId"});
  payment.belongsTo(billing, { as: "BID_billing", foreignKey: "BID"});
  billing.hasMany(payment, { as: "payments", foreignKey: "BID"});
  premise.belongsTo(customer, { as: "Customer", foreignKey: "Customerid"});
  customer.hasMany(premise, { as: "premises", foreignKey: "Customerid"});
  payment.belongsTo(premise, { as: "Premise", foreignKey: "PremiseId"});
  premise.hasMany(payment, { as: "payments", foreignKey: "PremiseId"});
  plant.belongsTo(route, { as: "RID_route", foreignKey: "RID"});
  route.hasMany(plant, { as: "plants", foreignKey: "RID"});
  premise.belongsTo(route, { as: "RID_route", foreignKey: "RID"});
  route.hasMany(premise, { as: "premises", foreignKey: "RID"});
  user.belongsTo(sector, { as: "SID_sector", foreignKey: "SID"});
  sector.hasMany(user, { as: "users", foreignKey: "SID"});
  zone.belongsTo(sector, { as: "SID_sector", foreignKey: "SID"});
  sector.hasMany(zone, { as: "zones", foreignKey: "SID"});
  billing.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(billing, { as: "billings", foreignKey: "UserID"});
  customer.belongsTo(zone, { as: "ZID_zone", foreignKey: "ZID"});
  zone.hasMany(customer, { as: "customers", foreignKey: "ZID"});

  return {
    billing,
    customer,
    payment,
    plant,
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
