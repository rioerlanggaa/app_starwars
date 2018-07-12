
var jsonFile = require ('../movies.json');

//home
exports.home = function(req, res){

	var movies = jsonFile.movies;

	res.render('home', {
		title : "Test Movie App",
		movies : movies
	});
};

//halaman

exports.movie_single = function(req, res){
	var episode_number = req.params.episode_number;
	
	var movies = jsonFile.movies;

	if (episode_number >=1 && episode_number <=6){

	var movie = movies[episode_number - 1 ];
	
	var title = movie.title;

	var main_characters = movie.main_characters;

	res.render('movie_single', {
		movies : movies,
		title : title,
		movie : movie,
		main_characters : main_characters
	});

	}

	else{

		res.render('notFound', {
			movies : movies,
			title : "Halaman tidak ditemukan"

		});
	}

	
};

//error 404

exports.notFound = function(req, res){
	res.send("ERROR 404 web page can't be found");
};