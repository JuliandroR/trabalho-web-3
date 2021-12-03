import { sequelize } from ".";
import { Collaborator } from "./collaborator";
import { INTEGER, STRING, DATE } from "sequelize";

export const Photo = sequelize.define(
  "Photo",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: STRING(128),
    img: STRING(128),
    photographer: STRING(128),
    owner: INTEGER,
    createdAt: {
      field: "created_at",
      type: DATE,
    },
  },
  {
    tableName: "photo",
    updatedAt: false,
  }
);

export function setup() {
  Photo.belongsTo(Collaborator, { as: "collaborator", foreignKey: "owner" });
};
