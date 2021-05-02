import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Payments = sequelize.define('payment', {
    TransactionID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'billing',
        key: 'BID'
      }
    },
    ExpectedAmount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PaidAmount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PremiseId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'premise',
        key: 'PremiseIdp'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: false,
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
        name: "BID",
        using: "BTREE",
        fields: [
          { name: "BID" },
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
export default Payments
