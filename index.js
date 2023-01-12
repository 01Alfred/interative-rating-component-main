var numberOfScores = document.querySelectorAll(".num").length;
var selected = document.querySelectorAll(".num");
var button = document.querySelector(".btn");
var mainContainer = document.querySelector('.container');
var thankContainer = document.querySelector('.h');
var text = document.querySelector('.rate-text');

for (var i = 0; i < numberOfScores; i++) {
selected[i].addEventListener("click", function(){

  for (var i = 0; i < numberOfScores; i++) {
    selected[i].classList.contains("pressed");
    selected[i].classList.remove("pressed");
    }

  this.classList.add("pressed");

 // thank you text
 var yourRate = this.innerHTML

text.textContent = "You selected " + yourRate + " out of 5";
 button.addEventListener("click", function(){
            // mainContainer.classList.add('hidden');
            mainContainer.classList.add('h');
            thankContainer.classList.remove("h")

          });

});
}
