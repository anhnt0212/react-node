var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://localhost:27017/react-node?auto_reconnect', {safe: true});
var app = express();

var logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    csrf = require('csurf'),
    errorHandler = require('errorhandler');
app.locals.moment = require('moment');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser('CEAF3FA4-F385-49AA-8FE4-54766A9874F1'));
app.use(session({
    secret: '59B93087-78BC-4EB9-993A-A61FC844F6C9',
    resave: true,
    saveUninitialized: true
}));
app.use(csrf());

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.locals._csrf = req.csrfToken();
    return next();
});
app.get('/', routes.index);
app.all('*', function (req, res) {
    res.status(404).send();
})
// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
