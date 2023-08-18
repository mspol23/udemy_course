exports.homepage = (req, res) => {
    res.render('index')
};

exports.formContent = (req, res) => {
    res.send('Post received');
}