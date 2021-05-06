const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('premise', {
    PremiseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MeterNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Customerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Routeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'route',
        key: 'Routeid'
      }
    }
  }, {
    sequelize,
    tableName: 'premise',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PremiseId" },
        ]
      },
      {
        name: "RID_idx",
        using: "BTREE",
        fields: [
          { name: "Routeid" },
        ]
      },
    ]
  });
};
