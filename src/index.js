const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const configRoutes = require("./routes/config");

const app = express();
const port = process.env.PORT || 7000;

// middleware para parsear JSON
app.use(express.json());

// middlewar
app.use('/api', userRoutes);
app.use('/api', configRoutes);


//routes
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

//mongoBD Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connect MongoDB"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("server listning on port" + port));
