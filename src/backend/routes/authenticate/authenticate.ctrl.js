"use strict";

import User from "../../models/User/User.js";

const output = {
  signIn: (req, res) => {
    res.render("/authenticate");
  },

  signUp: (req, res) => {
    res.render("/signUp");
  },
};

const process = {
  signIn: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signIn();

    const url = {
      method: "POST",
      path: "/authenticate",
      status: response.err ? 400 : 200,
    };

    return res.status(url.status).json(response);
  },

  signUp: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signUp();

    const url = {
      method: "POST",
      path: "/signUp",
      status: response.err ? 409 : 201,
    };

    return res.status(url.status).json(response);
  },
};

export let authenticationRoute = {
  output,
  process,
};
