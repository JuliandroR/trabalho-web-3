import { sequelize } from ".";
import { INTEGER, STRING, DATE } from "sequelize";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: STRING(128),
    email: STRING(256),
    password: STRING(72),
    createdAt: {
      field: "created_at",
      type: DATE,
    },
  },
  {
    tableName: "user",
    updatedAt: false,
  }
);
