/*
 * GET users listing.
 */
var games = {};
var count = 100;

exports.check = function(req, res) {
	console.log(req.query.test);
	//TODO find a room
	if(games[req.query.test] != null){
		//TODO join game
		console.log("son todos recontra putasos");
	} else {
		games[count] = {};
		count += 1;
	}
	//TODO check room update
	res.render('game', { title: 'Express' });
};