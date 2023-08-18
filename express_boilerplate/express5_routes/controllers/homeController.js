exports.homepage = (req, res) => {
    res.send(`<form action='/' method='POST'>
    Write your name: <input type='text' name='name'><br>
    Write your lastname: <input type='text' name='last'><br>
    Write your age: <input type='text' name='age'><br>
    <button>Submit</button>
    </form>`
)};

exports.formContent = (req, res) => {
    res.send('Post received');
}