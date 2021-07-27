// 모듈
import express from "express";
import path from 'path';

//import Sequelize from "sequelize";
import SequelizeAuto from "sequelize-auto";
const auto = new SequelizeAuto("auth", "admin", "wnsgh5493#", {
  host: "rds-whatelse.co3a9rtnyqgv.ap-northeast-2.rds.amazonaws.com",
  port: "3306",
});
auto.run((err) => {
  if (err) throw err;
});

const __dirname = path.resolve();
// import dotenv from "dotenv"; // 어떤 OS 환경에서 개발을 하더라도 동일하게 환경 변수를 등록/취득할 수 있음

const app = express();
// dotenv.config();

// 라우팅
import home from "./routes/home/index.js";

app.set("views", `${__dirname}/src/front/views`);
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/src/front/public`));

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

export default app;