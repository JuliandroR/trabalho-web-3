'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { INTEGER, STRING, DATE } from 'sequelize';
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const db = {}

export const sequelize = (() => {
  if (config.use_env_variable) {
    return new Sequelize(process.env[config.use_env_variable], config);
  } else {
    return new Sequelize(config.database, config.username, config.password, config);
  }
})()

const init = () => {
  readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

db.sequelize = sequelize
db.init = init

export default db


export const Collaborator = sequelize.define(
  'Collaborator',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: STRING(128),
    cpf: STRING(11),
    email: STRING(128),
    phone: STRING(15),
    state: STRING(64),
    city: STRING(128),
    bornDate: {
      field: 'born_date',
      type: DATE
    },
    responsible_id: INTEGER,
    createdAt: {
      field: 'created_at',
      type: DATE,
    }
  },
  {
    tableName: 'collaborator',
    updatedAt: false
  }
)

export const Photo = sequelize.define(
  'Photo',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: STRING(128),
    img: STRING(128),
    photographer: STRING(128),
    owner: INTEGER,
    createdAt: {
      field: 'created_at',
      type: DATE,
    }
  },
  {
    tableName: 'photo',
    updatedAt: false
  }
)

export const Responsible = sequelize.define(
  'Responsible',
  {
      id: {
          type: INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: STRING(128),
      cpf: STRING(11),
      createdAt: {
          field: 'created_at',
          type: DATE,
      }
  },
  {
      tableName: 'responsible',
      updatedAt: false
  }
)
