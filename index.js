function writeCards(arrayNames, event) {
  let messages = [];
  for (let i = 0; i < arrayNames.length; i++) {
    messages.push(
      `Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`
    );
  }
  return messages;
}
function countDown() {
  for (let down = 0; down < 11; down++) {
    console.log(down);
  }
}

// function writeCards(arrayNames) {
//   for (let i = 0; i < arrayNames.length; i++);
//   {
//     `Thank you, ${arrayNames}, for the wonderful surprise gift!`;
//   }
//   return arrayNames;
// }
