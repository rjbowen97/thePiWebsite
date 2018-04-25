function main() {
	var jeffPlayer = createPlayer("Jeff");
	console.log(jeffPlayer);
	var deck = createDeckOfCards();
	// console.log(deck);
	shuffle(deck);
	// console.log(deck);
	playerDrawCard(jeffPlayer, deck);
	playerDrawCard(jeffPlayer, deck);
	playerDrawCard(jeffPlayer, deck);
	playerDrawCard(jeffPlayer, deck);
	playerDrawCard(jeffPlayer, deck);
	console.log(jeffPlayer);
	checkHandRanking(jeffPlayer.cards)
	playerReturnCard(jeffPlayer, deck);

	// console.log(jeffPlayer);
	// console.log(deck);
}

function createPlayer(name) {
	var newPlayer = {};
	newPlayer.name=name;
	newPlayer.cards=[];
	return newPlayer;
}

function createDeckOfCards(argument) {
	var deck = [];
	for (var currentSuitIndex = 0; currentSuitIndex < 4; currentSuitIndex++) {
		for (var currentValue = 1; currentValue < 14; currentValue++) {
			deck.push(createCard(currentSuitIndex, currentValue));
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

function playerDrawCard(player, deck) {
	player.cards.push(deck.pop());
}

function playerReturnCard(player, deck) {
	deck.push(player.cards.pop());
}

function checkHandRanking(hand) {
	var suitsAndValuesTotals = totalSuitsAndValues(hand);

	console.log(suitsAndValuesTotals);
}

function totalSuitsAndValues(hand) {

	var suitTotals = [];
	var valueTotals = [];

	for (var currentSuitIndex = 0; currentSuitIndex < 4; currentSuitIndex++) {
		suitTotals.push([currentSuitIndex, 0]);
	}
	for (var currentValue = 1; currentValue < 14; currentValue++) {
		valueTotals.push([currentValue, 0]);
	}

	for (var currentCardIndex = 0; currentCardIndex < hand.length; currentCardIndex++) {
		suitTotals[hand[currentCardIndex].suit][1]++;
		valueTotals[hand[currentCardIndex].value - 1][1]++;
	}

	console.log(suitTotals);
	console.log(valueTotals);

	var suitsAndValuesTotals = {};
	suitsAndValuesTotals.suitTotals = suitTotals;
	suitsAndValuesTotals.valueTotals = valueTotals;

	return suitsAndValuesTotals;

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