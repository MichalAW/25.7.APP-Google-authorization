var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/store', function (req, res, next) {
    console.log('I am an intermediary when requesting / store');
    next();
});

app.get('/login', function (req, res) {
    res.render('login', {
        name: "login to google",
        url: "http://www.google.com"
    });
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not do what you want!')
});