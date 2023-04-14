const mysql = require("mysql");
const { logger } = require("../utils/logger");
const { DB_HOST, DB_USER, DB_PASS } = require("../utils/secrets");

// const connection = mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASS
// });
const connection = mysql.createConnection(
  'mysql://ckweagajcf64vcwudq6f:pscale_pw_YGDSkpbfztPxuyHGDYqPVxYyLY4A9RqS2ugJFNRh5Mu@aws.connect.psdb.cloud/abz?ssl={"rejectUnauthorized":true}'
);

connection.connect((err) => {
  if (err) logger.error(err.message);
});

module.exports = connection;
