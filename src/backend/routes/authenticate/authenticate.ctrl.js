"use strict";

import User from "../../models/User/User.js";

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    //let { email, password } = req.body;
    //let user = new User(req.body);

    const user = new User(req.body);
    const response = await user.signIn();

    const url = {
      method: "POST",
      path: "/authenticate",
      status: response.err ? 400 : 200,
    };

    // let hash = md5(password);
    // let passwordCorrect = hash === user.passwordHash;
    // if (!passwordCorrect) {
    //     return res.status(500).send('Password incorrect');
    // }

    return res.status(url.status).json(response);
  });
};
