const express = require("express");
const path = require("path");

const pagesRoutes = require("./routes/pages");
const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();
const sequelize = require("./config/database")

// require("./models/Usuario")

sequelize.sync().then(() => {
    console.log("Banco de dados sincronizado!")
}).catch((err) => {
    console.error(`Erro ao sincronizar o banco! ${err}`)
})

app.use(express.json());

app.use(express.static(
    path.join(__dirname, "..", "..", "frontend", "public")
));

app.use("/", pagesRoutes);
app.use(usuariosRoutes);

module.exports = app;