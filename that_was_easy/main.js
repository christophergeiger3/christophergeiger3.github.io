function sayThatWasEasy(){
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

function sayGood(){
    var hey = new Audio("hey_thats_pretty_good.mp3");
    hey.play()
}

$("#easy").on("click", sayThatWasEasy);
$("#good").on("click", sayGood);