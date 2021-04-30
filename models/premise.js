import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Premises = sequelize.define('premise', {
    PremiseId: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MeterNo: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Customerid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'Customerid'
      }
    },
    RID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'route',
        key: 'RID'
      }
    }
  }, {
    sequelize,
    tableName: 'premise',
    timestamps: false,
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
        name: "Customerid",
        using: "BTREE",
        fields: [
          { name: "Customerid" },
        ]
      },
      {
        name: "RID",
        using: "BTREE",
        fields: [
          { name: "RID" },
        ]
      },
    ]
  });
export default Premises
