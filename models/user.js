import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Users = sequelize.define('user', {
  UserID: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  // SID: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: 'sector',
  //     key: 'SIDu'
  //   }
  // },
  UserName: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  Email: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  // ZID: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: 'zone',
  //     key: 'ZID'
  //   }
  // },
  Password: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'user',
  timestamps: true,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "UserID" },
      ]
    },
    {
      name: "SID",
      using: "BTREE",
      fields: [
        { name: "SID" },
      ]
    },
    {
      name: "ZID",
      using: "BTREE",
      fields: [
        { name: "ZID" },
      ]
    },
  ]
});
export default Users
