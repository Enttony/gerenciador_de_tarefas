const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");

router.post("/login", usuariosControllers.login);

router.post("/cadastro", usuariosControllers.cadastro);

module.exports = router;