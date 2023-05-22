const pool = require("./database");


const createTblQry = `CREATE TABLE users (
  USER_ID SERIAL PRIMARY KEY,
  USERNAME VARCHAR(255) NOT NULL,
  EMAIL VARCHAR(255) NOT NULL,
  PASSWORD VARCHAR(255) NOT NULL,
  CREATED_AT TIMESTAMP,
  UPDATED_AT TIMESTAMP
);`;

const createTblQry = `CREATE TABLE game_points (
  POINTS_ID SERIAL PRIMARY KEY,
  GAME_ID INT,
  USER_ID VARCHAR(255),
  SCORE INT,
  TIMESPENT INT,
  DATE_TIME TIMESTAMP
);`;

const createTblQry = `CREATE TABLE game_list (
  GAME_ID SERIAL PRIMARY KEY,
  GAME_NAME INT,
  AUTHOR VARCHAR(255),
  TYPE VARCHAR(255),
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
