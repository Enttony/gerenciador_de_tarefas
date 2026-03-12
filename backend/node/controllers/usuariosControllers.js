const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {

    const { usuario, senha } = req.body;

    if (!usuario || !senha ) {
        return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    try {

        const usuarioExistente = await Usuario.findOne({ where: {usuario} });

        if (!usuarioExistente) {
            return res.status(403).json({ erro: "Usuário ou senha incorretos" });
        }

        const senhaValida = bcrypt.compareSync(senha, usuarioExistente.senha);

        if (!senhaValida) {
            return res.status(403).json({ erro: "Usuário ou senha incorretos" });
        }

        return res.status(200).json({
            message: "Login realizado",
            usuario: {
                id: usuarioExistente.id,
                usuario: usuarioExistente.usuario,
                email: usuarioExistente.email
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro no servidor" })
    }
}

exports.cadastro = async (req, res) => {

    const { usuario, email, senha } = req.body;

    if (!usuario || !email || !senha) {
        return res.status(400).json({ erro: "Preencha todos os campos" });
    }

    try {

        const usuarioExistente = await Usuario.findOne({ where: { usuario } });
        const emailExistente = await Usuario.findOne({ where: { email } });

        if (usuarioExistente) {
            return res.status(400).json({ erro: "Usuário já cadastrado" });
        }

        if (emailExistente) {
            return res.status(400).json({ erro: "Email já cadastrado" });
        }

        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        await Usuario.create({
            usuario,
            email,
            senha: senhaCriptografada
        });

        return res.status(201).json({ message: "Usuário cadastrado com sucesso" })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ erro: "Erro no servidor" });
    }
}