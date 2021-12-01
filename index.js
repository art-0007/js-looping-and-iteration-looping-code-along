// Code your solutions in this file

function writeCards(people, ivent) {
    let cards = []
  for (let i = 0; i < people.length; i++) {
    cards.push(`Thank you, ${people[i]}, for the wonderful ${ivent} gift!`);
    
  }

  return cards;
}

function countDown(num) {
    let count = num
while (count >= 0) {
  console.log(count--);
}
}