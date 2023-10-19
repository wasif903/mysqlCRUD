const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./models");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`APP LISTENING TO PORT ${process.env.PORT}`)
  );
});
