const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    TransactionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'billing',
        key: 'billid'
      }
    },
    ExpectedAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PaidAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PremiseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'billing',
        key: 'PremiseId'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TransactionID" },
        ]
      },
      {
        name: "billid",
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "PremiseId",
        using: "BTREE",
        fields: [
          { name: "PremiseId" },
        ]
      },
    ]
  });
};
