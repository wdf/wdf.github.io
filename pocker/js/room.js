/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

var $container = document.getElementById('desk')
var $topbar = document.getElementById('topbar')
// var $sort = document.createElement('button')
var $shuffle = document.createElement('button')
// var $bysuit = document.createElement('button')
var $fan = document.createElement('button')
var $poker = document.createElement('button')
// var $flip = document.createElement('button')

$shuffle.textContent = '洗牌'
// $sort.textContent = 'Sort'
// $bysuit.textContent = 'By suit'
$fan.textContent = '洗牌'
$poker.textContent = '发牌'
// $flip.textContent = '翻牌'

// $topbar.appendChild($flip)
$topbar.appendChild($shuffle)
// $topbar.appendChild($bysuit)
$topbar.appendChild($fan)
$topbar.appendChild($poker)
// $topbar.appendChild($sort)

var deck = Deck()

// easter eggs start

var acesClicked = []
var kingsClicked = []
// easter eggs end
$shuffle.addEventListener('click', function () {
    deck.flip("back");
    deck.shuffle()
    deck.shuffle()
})
// $sort.addEventListener('click', function () {
//     deck.sort()
// })
// $bysuit.addEventListener('click', function () {
//     deck.sort(true) // sort reversed
//     deck.bysuit()
// })
$fan.addEventListener('click', function () {
    deck.fan()
    deck.shuffle()
    deck.sort(true)
})
// $flip.addEventListener('click', function () {
//     deck.flip()
// })
$poker.addEventListener('click', function () {
    deck.poker({
      current:1,
      total:3,
      cards:[[1,0],[2,1],[3,2],[4,3],[5,3]]
    });
})


deck.mount($container)

// deck.intro()
// deck.sort()
// deck.shuffle()
deck.flip("back");
// deck.shuffle()
// deck.shuffle()
// deck.shuffle()
// deck.poker({
//   current:1,
//   total:3,
//   cards:[[1,0],[2,1],[3,2],[4,3],[4,3]]
// });
