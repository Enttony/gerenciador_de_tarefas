const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", (req, res) => {

    const filePath = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "frontend",
        "views",
        "public",
        "login.html"
    );

    res.sendFile(filePath);

});

router.get("/cadastro", (req, res) => {
    const filePath = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "frontend",
        "views",
        "public",
        "cadastro.html"
    );

    res.sendFile(filePath);
});

router.get("/home", (req, res) => {
    const filePath = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "frontend",
        "views",
        "private",
        "home.html"
    )

    res.sendFile(filePath);
})

module.exports = router;