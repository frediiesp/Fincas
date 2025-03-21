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

const formularioOlvidasteContraseña = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Olvide mi contraseña'
    });
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidasteContraseña
}