exports.homepage = (req, res) => {
    res.render('index', {
        title: 'Lorem ipsum...',
        numbers: [1, 2, 3, 4, 5]
    });
    return;
};

exports.formContent = (req, res) => {
    res.send(req.body);
    return;
};

