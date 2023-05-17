const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "ilearning",
});

/* const createTblQry = `CREATE TABLE Course (
  COURSE_ID SERIAL PRIMARY KEY,
  COURSE_NAME VARCHAR(255),
  COURSE_DESCRIPTION VARCHAR(255),
  isCompleted BOOLEAN
);`;

pool
  .query(createTblQry)
  .then((Response) => {
    console.log("Table Created");
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

  */

module.exports = pool;
