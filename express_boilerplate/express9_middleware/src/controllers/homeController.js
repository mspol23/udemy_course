exports.homepage = (req, res) => {
    res.render('index');
    return;
};

exports.formContent = (req, res) => {
    res.send(req.body);
    return;
}