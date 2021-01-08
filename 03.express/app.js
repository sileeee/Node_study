const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin'); //admin 불러옴

const app = express();
const port = 3000;


nunjucks.configure('template', {
    autoescape: true,
    express: app // app 객체 선택
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);

app.listen( port, () => {
    console.log('Express listening on port', port);
}); 