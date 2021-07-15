"use strict";

import server from "./server.js";
//const port = process.env.PORT || 3000;
const port = 8080;

server.listen(port, () => {
  console.log("Server Start!");
});
