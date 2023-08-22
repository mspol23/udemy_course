// DUAS FORMA DE IMPLEMENTAR UM MIDDLEWARE.

// module.exports = (req, res, next) => {
//     if(req.body.name) {
//         console.log('');
//         console.log(`Vi que você postou ${req.body.name}`)
//         console.log('');
//     };
//     next()
// }

// Da seguinte forma, podemos implementar mais de um middleware
exports.middlewareGlobal = (req, res, next) => {
    if(req.body.name) {
        console.log('');
        console.log(`Vi que você postou ${req.body.name}`)
        console.log('');
    };
    next()
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        console.log(err)
        return res.render('err404')
    }
    next()
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
