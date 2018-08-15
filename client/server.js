var path = require('path');
var express = require('express');
var app = new express();
var port = process.env.PORT || 5001;
const fs = require('fs');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    let data = fs.readFileSync(path.join(__dirname, '/dist/index.html'), 'utf8');
    res.send(data);
});

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info('Listening on port %s. open up http://localhost:%s/ in your browser.', port, port);
    }
});
