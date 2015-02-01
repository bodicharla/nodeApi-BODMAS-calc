var express= require('express');
var app= express();
var bodyparser= require('body-parser');

//models

var calc= require('./app/calc.js');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var port= process.env.PORT || 9998

//routes
var router= express.Router();

router.use(function(req,res, next){
		console.log('some one access the api');
		next();

		});

// '/' route
router.get('/', function(req, res){
		res.json({message: 'hooray! welcome to our api!'});

		});

// sample route
router.get('/sample', function(req, res){
		res.json({message: 'this is just sample!!'});

		});

app.use('/api', router);
//routes bears

router.route('/calc/:expr')
	
	.get(function(req, res){

	       res.json(calc.finresult(req.params.expr));

});

//start server

app.listen(port);

console.log('rest server started at port '+port);
