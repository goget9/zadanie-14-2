//var element =
//	React.createElement('div', {},
//		React.createElement('h1', {}, 'Lista filmow'),
//		React.createElement('ul', {},
//			React.createElement('li', {},
//				React.createElement('h1', {}, 'Harry Potter'),
//				React.createElement('p', {}, 'Film o czarodzieju')
//		),
//			React.createElement('li', {},
//				React.createElement('h1', {}, 'krol lew'),
//				React.createElement('p', {}, 'Film o lwie')
//			)
//		)
//	);

var movies = [
	{
		id: 1,
		title: 'harry potter',
		desc: 'film o czarodzieju',
		imdb: '7,8',
		poster: 'hp.png'
	},
	{
		id: 2,
		title: 'bekarty wojny',
		desc: 'film wojenny',
		imdb: '8,7',
		poster: 'bw.png'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('p', {}, movie.imdb),
		React.createElement('img', {src: movie.poster})
	);
});
var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmow'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));

