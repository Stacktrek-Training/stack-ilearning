const pool = require("./database");

const createTblQry = `CREATE TABLE Users (
    USERNAME VARCHAR(255) PRIMARY KEY,
    EMAIL VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    CREATED_AT TIMESTAMP,
    UPDATED_WHEN TIMESTAMP
  );`;

pool
  .query(createTblQry)
  .then((response) => {
    console.log("Table Created");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
