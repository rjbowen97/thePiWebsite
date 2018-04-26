function main() {
	
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

function playerDrawCardFromDeck(player, deck) {
	player.cards.push(deck.pop());
}

function playerReturnCard(player, deck) {
	deck.push(player.cards.pop());
}

function checkHandRanking(hand) {
	var suitsAndValuesTotals = totalSuitsAndValuesOfHand(hand);
}

function totalSuitsAndValuesOfHand(hand) {

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

// START testing block

function testShuffle(print = false) {
	var deck = createDeckOfCards();
	
	shuffle(deck);

	if (print) {
		console.log(deck);
	}
}

function testDraw(print = false) {
	var jeffPlayer = createPlayer("Jeff");

	if (print) {
		console.log(jeffPlayer);
	}

	var deck = createDeckOfCards();
	playerDrawCardFromDeck(jeffPlayer, deck);
	playerDrawCardFromDeck(jeffPlayer, deck);

	if (print) {
		console.log(jeffPlayer);
	}
}

function testPlayerReturnCard(print = false) {
	var jeffPlayer = createPlayer("Jeff");
	var deck = createDeckOfCards();

	playerDrawCardFromDeck(jeffPlayer, deck);

	if (print) {
		console.log(jeffPlayer);
		console.log(deck);
	}

	playerReturnCard(jeffPlayer, deck);

	if (print) {
		console.log(jeffPlayer);
		console.log(deck);
	}
}

function testTotalSuitsAndValuesOfHand(print = false) {
	var jeffPlayer = createPlayer("Jeff");
	var deck = createDeckOfCards();
	playerDrawCardFromDeck(jeffPlayer, deck);
	playerDrawCardFromDeck(jeffPlayer, deck);
	var suitsAndValuesTotals = totalSuitsAndValuesOfHand(jeffPlayer.cards);

	if (print) {
		console.log(suitsAndValuesTotals);
	}
}

function runTesting() {
	testShuffle(false);
	testDraw(false);
	testPlayerReturnCard(false);
	testTotalSuitsAndValuesOfHand(false);
}

runTesting();

// END testing block