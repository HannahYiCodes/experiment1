var userInput = document.getElementById("textInput");
var wordCounting = document.getElementById("wordCounter");

userInput.addEventListener("keyup",function(){
	var countingCharacters = userInput.value.split('');
  wordCounting.innerText = countingCharacters.filter( item => {
      return (item != ' ')
  }).length;
});