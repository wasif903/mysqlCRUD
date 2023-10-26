const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./models");
const posts = require("./routes/Posts");
const users = require("./routes/UserAuth");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// USERS
app.use("/auth", users);
// POSTS
app.use("/post", posts);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`APP LISTENING TO PORT ${process.env.PORT}`)
  );
});
