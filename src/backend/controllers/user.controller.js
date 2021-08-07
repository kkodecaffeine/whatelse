"use strict";

import database from "../../../models/index.js";

export async function findAll (req,res){
    database.default
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
