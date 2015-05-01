app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'This Month\'s Bestsellers';
	$scope.promo = 'The most popular books this month.';
	$scope.products = [
		{
			name: 'Life of Pi',
			price: 15.16,
			pubdate: ('2002', '10', '10'),
			cover: 'img/life-of-pi.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'The Kite Runner',
			price: 15.16,
			pubdate: ('2004', '05', '11'),
			cover: 'img/the-kite-runner.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'I Am Malala',
			price: 18.18,
			pubdate: ('2013', '10', '08'),
			cover: 'img/i-am-malala.jpg',
			likes: 0,
			dislikes: 0
		},
		{
			name: 'Stone Mattress',
			price: 18.77,
			pubdate: ('2014', '09', '09'),
			cover: 'img/stone-mattress.jpg',
			likes: 0,
			dislikes: 0
		}
	]
	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
		$scope.products[index].dislikes +=1;
	};
}]);