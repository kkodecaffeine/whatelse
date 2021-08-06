"use strict";

import db from "../../../models/index.js";

export async function findAll(req, res) {
  db.users
    .findAll({ where: {}, limit: 10 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
}
