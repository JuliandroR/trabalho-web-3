import { sequelize } from ".";
import { Photo } from "./photo";
import { Responsible } from './responsible'
import { INTEGER, STRING, DATE } from "sequelize";

export const Collaborator = sequelize.define(
  "Collaborator",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: STRING(128),
    cpf: STRING(11),
    email: STRING(128),
    phone: STRING(15),
    state: STRING(64),
    city: STRING(128),
    bornDate: {
      field: "born_date",
      type: DATE,
    },
    responsible_id: INTEGER,
    createdAt: {
      field: "created_at",
      type: DATE,
    },
  },
  {
    tableName: "collaborator",
    updatedAt: false,
  }
);

export function setup() {
  Collaborator.belongsTo(Responsible, { foreignKey: "responsible_id" });
  Collaborator.hasMany(Photo, { foreignKey: "owner" });
};
