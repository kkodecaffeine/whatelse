"use strict";

import server from "./server.js";
const port = process.env.DB_PORT || 3000;

server.listen(port, () => {
  console.log("Server Start!");
});
