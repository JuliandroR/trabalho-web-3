"use strict";

import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import Sequelize from "sequelize";

const basename = _basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const db = {};

export const sequelize = (() => {
  if (config.use_env_variable) {
    return new Sequelize(process.env[config.use_env_variable], config);
  } else {
    return new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
  }
})();

const init = () => {
  readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach(async (file) => {
      const model = await import(join(__dirname, file));

      if (model.setup) model.setup();

      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

db.sequelize = sequelize;
db.init = init;
export default db;
