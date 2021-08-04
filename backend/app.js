
const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/nfts", require("./src/routers/nftRoutes"));
app.use("/api/v1/users", require("./src/routers/userRoutes"));
app.use("/files", express.static(path.join("src/files")));

module.exports = app;
