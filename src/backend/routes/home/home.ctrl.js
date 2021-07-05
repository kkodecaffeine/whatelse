"use strict";

import User from "../../models/User/User.js";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  signin: (req, res) => {
    res.render("home/signin");
  },

  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  signin: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signin();

    const url = {
      method: "POST",
      path: "/signin",
      status: response.err ? 400 : 200,
    };

    return res.status(url.status).json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    return res.status(url.status).json(response);
  },
};

export let ctrl = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    
  } else {
    
  }
};
