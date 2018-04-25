const suits = ['H','S','C','D'];

function main() {
	var jeffPlayer = createPlayer("Jeff");
	var deck = createDeckOfCards();
	console.log(jeffPlayer);
	console.log(deck);

}

function createPlayer(name) {
	var newPlayer = {};
	newPlayer.name=name;
	return newPlayer;
}

function createDeckOfCards(argument) {
	var deck = {};

	for (var currentSuitIndex = 0; currentSuitIndex < suits.length; currentSuitIndex++) {
		for (var currentIndex = 0; currentIndex < 13; currentIndex++) {
			deck[currentIndex + currentSuitIndex*13] = createCard(suits[currentSuitIndex], currentIndex);
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

main();