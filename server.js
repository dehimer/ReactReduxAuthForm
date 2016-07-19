const http = require('http');
const express = require('express');
const app = express();


if(process.env.npm_lifecycle_event === 'dev')
{
  	const webpack = require('webpack');
	const webpackConfig = require('./webpack/common.config.js');
	const compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: false, publicPath: webpackConfig.output.publicPath,
	}));

	app.use(require('webpack-hot-middleware')(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
	}));

};

app.use(express.static(__dirname + '/client'));


app.get(/.*/, function root(req, res) {
  	res.sendFile(__dirname + '/client/index.html');
});

const server = new http.Server(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);
console.log('server runned on port: '+PORT);