//  Entry point
// Run server: node tmserver.js 
// Browser: localhost:3000 

var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	helpers: require('./public/js/helpers.js').helpers,
	partialsDir: 'views/partials/',
	layoutsDir: 'views/layouts/'
}));


app.set('views', path.join(__dirname, 'views')) ;
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res) {
	var err = new Error('Not Found');
	err.status = 404;
	res.render('404');
});


app.use(function(err, req, res) {
	res.render('500');
});

app.listen(app.get('port'), function(){
//	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});
