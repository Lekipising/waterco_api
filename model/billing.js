import Sequelize from "sequelize";
import {sequelize} from "../db/dbConnect.js";

const Bills = sequelize.define('billing', {
    billid: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PremiseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'premise',
        key: 'PremiseId'
      }
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'UserID'
      }
    },
    Reading: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'billing',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "PremiseId_idx",
        using: "BTREE",
        fields: [
          { name: "PremiseId" },
        ]
      },
      {
        name: "UserID_idx",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
  export default Bills
