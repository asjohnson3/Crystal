var wins = 0;
var loss = 0;

var cry1 = Math.floor(Math.random()*12)+1;
console.log(cry1);
$("#button-1").val(cry1);
var cry2 = Math.floor(Math.random()*12)+1;
console.log(cry2);
$("#button-2").val(cry2);
var cry3 = Math.floor(Math.random()*12)+1;
console.log(cry3);
$("#button-3").val(cry3);
var cry4 = Math.floor(Math.random()*12)+1;
console.log(cry4);
$("#button-4").val(cry4);
var rand = Math.floor(Math.random() * (120-19+1))+19;
$("#startNumber").text(rand);


$(".number").on("click", function() {
    rand-= $(this).val();
    console.log(rand, $(this).val());
    $("#startNumber").text(rand);

    if(rand === 0){
        alert("Winner")
        wins ++;
        $(".win").text("Wins = "+ wins);
        rand = Math.floor(Math.random() * (120-19+1))+19;
        $("#startNumber").text(rand);
        cry1 = Math.floor(Math.random()*12)+1;
        console.log(cry1);
        $("#button-1").val(cry1);
        cry2 = Math.floor(Math.random()*12)+1;
        console.log(cry2);
        $("#button-2").val(cry2);
        cry3 = Math.floor(Math.random()*12)+1;
        console.log(cry3);
        $("#button-3").val(cry3);
        cry4 = Math.floor(Math.random()*12)+1;
        console.log(cry4);
        $("#button-4").val(cry4);
    }else if(rand < 0){
        alert("Loser");
        loss ++;
        $(".losses").text("Losses = "+ loss);
        rand = Math.floor(Math.random() * (120-19+1))+19;
        $("#startNumber").text(rand);
        cry1 = Math.floor(Math.random()*12)+1;
        console.log(cry1);
        $("#button-1").val(cry1);
        cry2 = Math.floor(Math.random()*12)+1;
        console.log(cry2);
        $("#button-2").val(cry2);
        cry3 = Math.floor(Math.random()*12)+1;
        console.log(cry3);
        $("#button-3").val(cry3);
        cry4 = Math.floor(Math.random()*12)+1;
        console.log(cry4);
        $("#button-4").val(cry4);
    }
});