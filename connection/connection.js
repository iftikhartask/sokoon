const Sequelize = require("sequelize");

const connection = new Sequelize(
  // "sokoon",
  // "postgres",
  // "admin",
  "railway",
  "postgres",
  "1d*2Fd-eGF52c1644BgDa*G3gc5bdcDb",
  {
    //flux is user name of aws
    host: 'viaduct.proxy.rlwy.net',
   // host: 'localhost',
    dialect: "postgres",
    port: "53356",
    define: {
      timestamps: false, //turnoff timestapm
    },
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
  }
);

module.exports.connection = connection;