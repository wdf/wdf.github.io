/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

var $container = document.getElementById('desk')

var deck = Deck()

// easter eggs start

var acesClicked = []
var kingsClicked = []
// easter eggs end

deck.mount($container)

// deck.intro()
// deck.sort()
// deck.shuffle()
deck.flip("back")
deck.shuffle()
deck.shuffle()
deck.shuffle()
deck.poker({
  current:1,
  total:3,
  cards:[[1,0],[2,1],[3,2],[4,3],[4,3]]
});
