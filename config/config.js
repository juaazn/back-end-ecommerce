require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    dialect: process.env.DB_DEV_DIALECT,
    jwt_secret: process.env.DB_DEV_JWT_SECRET,
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
    dialect: process.env.DB_TEST_DIALECT,
  },
  production: {
    mysqldatabase: process.env.MYSQLDATABASE,
    mysql_host: process.env.MYSQLHOST,
    mysql_password: process.env.MYSQLPASSWORD,
    mysql_port: process.env.MYSQLPORT,
    mysql_user: process.MYSQLUSER,
    mysql_database: process.env.MYSQL_DATABASE,
    mysql_public_url: process.env.MYSQL_PUBLIC_URL,
    mysql_root_password: process.env.MYSQL_ROOT_PASSWORD,
    mysql_url: process.env.MYSQL_URL,
    jwt_secret: process.env.MYSQL_JWT_SECRET,
    dialect: "mysql",
  },
};
