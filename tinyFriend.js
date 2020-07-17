function tinyFriend(names) {
    var smallestWord = names[0];
    for (let i = 0; i < names.length; i++) {
         var currentWord = names[i];
        if (currentWord.length < smallestWord.length ) {
             smallestWord = currentWord;
         }
        }
    return smallestWord;
}
var result = tinyFriend(['kamal', 'jamalo', 'jahirullah', 'tonmoy', 'rokibul','jui','pk']);
console.log(result);
