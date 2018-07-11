// $(function(){
//     setCrystalValues(crystalsList)
//     $(".number").on("click",function(){
//         counter+= Number($(this).val())
//         console.log(counter)
//     });
// });

// var game = {
//     target: function(){
//         return Math.floor(Math.random() * (120-19+1))+19;
//     }
// }





var cry1 = Math.floor(Math.random()*12)+1;
console.log(cry1);
// $("#button1").value(cry1)
var cry2 = Math.floor(Math.random()*12)+1;
console.log(cry2);
var cry3 = Math.floor(Math.random()*12)+1;
console.log(cry3);
var cry4 = Math.floor(Math.random()*12)+1;
console.log(cry4);

var rand = Math.floor(Math.random() * (120-19+1))+19;
$("#startNumber").text(rand);

$("#button-1").on("click",function(){
    $("#startNumber").text(Number(rand)-Number(cry1));
});

$("#button-2").on("click",function(){
    $("#startNumber").text(Number(rand)-Number(cry2));
});

$("#button-3").on("click",function(){
    $("#startNumber").text(Number(rand)-Number(cry3));
});

$("#button-4").on("click",function(){
    $("#startNumber").text(Number(rand)-Number(cry4));
});


// function didWin(){ 
//     if (counter === game){
//         counter = 0;
            
//     }
// };