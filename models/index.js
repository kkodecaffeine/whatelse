"use strict";

import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import Sequelize from "sequelize";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basename = _basename(__filename);
const env = process.env.NODE_ENV || "development";
import { readFile } from "fs/promises";

const config = JSON.parse(
  await readFile(new URL("../config/config.json", import.meta.url))
)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    //db[model.name] = model;

    //import model from `${__dirname}/user_info_base.js`
    //const model =  await readFile(new URL(path.join(__dirname, "/models", file), import.meta.url));

    // const model = require(path.join(__dirname, "/models", file)).default(
    //   sequelize,
    //   Sequelize.DataTypes
    // );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
