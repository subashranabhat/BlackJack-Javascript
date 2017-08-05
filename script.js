var cards = [
	{id : 'ac', value : 1},
	{id : 'ad', value : 1},
	{id : 'ah', value : 1},
	{id : 'as', value : 1},
	
	{id : '2c', value : 2},
	{id : '2d', value : 2},
	{id : '2h', value : 2},
	{id : '2s', value : 2},
	
	{id : '3c', value : 3},
	{id : '3d', value : 3},
	{id : '3h', value : 3},
	{id : '3s', value : 3},
	
	{id : '4c', value : 4},
	{id : '4d', value : 4},
	{id : '4h', value : 4},
	{id : '4s', value : 4},
	
	{id : '5c', value : 5},
	{id : '5d', value : 5},
	{id : '5h', value : 5},
	{id : '5s', value : 5},
	
	{id : '6c', value : 6},
	{id : '6d', value : 6},
	{id : '6h', value : 6},
	{id : '6s', value : 6},
	
	{id : '7c', value : 7},
	{id : '7d', value : 7},
	{id : '7h', value : 7},
	{id : '7s', value : 7},
	
	
	{id : '8c', value : 8},
	{id : '8d', value : 8},
	{id : '8h', value : 8},
	{id : '8s', value : 8},
	
	{id : '9c', value : 9},
	{id : '9d', value : 9},
	{id : '9h', value : 9},
	{id : '9s', value : 9},
	
	{id : '10c', value : 10},
	{id : '10d', value : 10},
	{id : '10h', value : 10},
	{id : '10s', value : 10},
	
	{id : 'jc', value : 11},
	{id : 'jd', value : 11},
	{id : 'jh', value : 11},
	{id : 'js', value : 11},
	
	{id : 'qc', value : 12},
	{id : 'qd', value : 12},
	{id : 'qh', value : 12},
	{id : 'qs', value : 12},
	
	{id : 'kc', value : 13},
	{id : 'kd', value : 13},
	{id : 'kh', value : 13},
	{id : 'ks', value : 13}
];

var sumOfCards = 0;

function getRandomCard(){
	var randomCard = cards[Math.floor(Math.random()*cards.length)];
	return randomCard;
}

function getNewCard (){
	var randomCard = getRandomCard();
	console.log("random card image url : " , randomCard);
	sumOfCards += randomCard.value;
	displayCard(randomCard);
	console.log('sum of cards : ',sumOfCards);
}

function displayCard(randomCard){
	var src = 'cards/'+randomCard.id+'.png';
	var img = document.createElement("img");
	img.src = src;
	img.width = 100;
	img.height = 100;
	document.getElementById("player-cards").appendChild(img);
}

function sumTotal(){
}
