import mysql from "mysql";

const conn = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PSWORD,
  // database: process.env.DB_DATABASE,

  host: "rds-whatelse.co3a9rtnyqgv.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "wnsgh5493#",
  database: "auth"
});

// DB_HOST = "rds-whatelse.co3a9rtnyqgv.ap-northeast-2.rds.amazonaws.com"
// DB_PORT = 3000
// DB_USER = "admin"
// DB_PSWORD = "wnsgh5493#"
// DB_DATABASE = "auth"

conn.connect(function(err) {  
  if(err) throw "There is no connection to the mysql server..." + err.message;  
  console.info("Connected!");  
});

export default conn;