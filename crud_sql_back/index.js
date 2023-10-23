const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./models");
const posts = require("./routes/Posts");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// POSTS
app.use("/post", posts);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`APP LISTENING TO PORT ${process.env.PORT}`)
  );
});
