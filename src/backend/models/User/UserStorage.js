"use strict";

import db from "../../config/db.js";

class UserStorage {
  static getUserInfo(email) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM auth.user_info_base WHERE email = ?;";


      db.query(query, [email], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });

    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

export default UserStorage;