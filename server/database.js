const { Pool } = require("pg");

const connectionString =
  "postgres://ilearning_db_user:9vaZGNodqZYTz70U4EgkFb2JRHF2AiU0@dpg-chi9sg64dadc9vmps4cg-a.singapore-postgres.render.com/ilearning_db";

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
