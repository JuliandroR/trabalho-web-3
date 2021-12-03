import { sequelize } from ".";
import { INTEGER, STRING, DATE } from "sequelize";

export const Responsible = sequelize.define(
  "Responsible",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: STRING(128),
    cpf: STRING(11),
    createdAt: {
      field: "created_at",
      type: DATE,
    },
  },
  {
    tableName: "responsible",
    updatedAt: false,
  }
);
