const suits = ['H','S','C','D'];

function main() {
	var jeffPlayer = createPlayer("Jeff");
	console.log(jeffPlayer);
	var deck = createDeckOfCards();
	console.log(deck);
	shuffle(deck);
	console.log(deck);
}

function createPlayer(name) {
	var newPlayer = {};
	newPlayer.name=name;
	newPlayer.hand=[];
	return newPlayer;
}

function createDeckOfCards(argument) {
	var deck = [];

	for (var currentSuitIndex = 0; currentSuitIndex < suits.length; currentSuitIndex++) {
		for (var currentIndex = 0; currentIndex < 13; currentIndex++) {
			deck.push(createCard(suits[currentSuitIndex], currentIndex));
		}
	}
	return deck;
}

function createCard(suit, value) {
	var card = {};
	card.suit = suit;
	card.value = value;
	return card;
}

function drawCard(player, deck) {
	player.hand.push(deck.pop())
}

//Fisher-yates shuffle
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

main();