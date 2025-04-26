$(document).on("keydown", function (e) {
    if (e.keyCode === 32) {
        randomDice();
    }
});
$(document).on("click", function () {
    randomDice() ;
});

function randomDice() {
    var randomIndex1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "./Images/" + randomIndex1 + ".png"; // Correct file extension
    $(".left").attr("src", randomDiceImage1); // Update the selector to target the img element

    var randomIndex2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "./Images/" + randomIndex2 + ".png"; // Correct file extension
    $(".right").attr("src", randomDiceImage2); // Update the selector to target the img element
    if(randomIndex1 > randomIndex2 ) {
       $(".title").html("Player 1 Wins!") ;
    }
    if(randomIndex2 > randomIndex1 ) {
        $(".title").html("Player 2 Wins!") ;
    }
    if(randomIndex1 === randomIndex2 ) {
        $(".title").html("Draw!") ;
    } 
    
}





