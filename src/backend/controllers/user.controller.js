"use strict";

import database from "../../../models/index.js";

export async function findAll(req, res) {
  database.User
    .findAll({ where: {}, limit: 10 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users.",
      });
    });
};

export async function findOne(req, res) {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const email = req.body.email;

  database.default
    .findByPk(email)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};
