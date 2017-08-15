'use strict';

const
	express = require('express'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	scribe = require('scribe-js')();

const
	logger = process.console,
	app = express();

const
	ONE_SEC = 1000,
	ONE_MIN = 60 * ONE_SEC,
	ONE_HOUR = 60 * ONE_MIN;

logger.addLogger('backend', 'cyan');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(scribe.express.logger(logger)); //Log each request
app.use('/logs', scribe.webPanel());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', (req, res) => {
	res.render('pages/clock');
});

app.get('*', (req, res) => {
	res.render('pages/error', {
		title: '404',
		errMsg: 'Whoops! Looks like that page got a little lost on its way to you'
	});
});

app.listen(1059, () => {
	logger.time().file().info('SpotifyApps listening on port 1059!');
});
