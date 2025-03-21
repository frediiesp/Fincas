import Usuario from "../models/Usuario.js";

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear cuenta'
    });
}

const registrar = async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
}

const formularioOlvidasteContraseña = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Olvide mi contraseña'
    });
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidasteContraseña
}