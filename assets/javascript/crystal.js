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



var wins = 0;
var loss = 0;

var cry1 = Math.floor(Math.random()*12)+1;
console.log(cry1);
$("#button-1").val(cry1);
// $("#button1").value(cry1)
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
    }else if(rand < 0){
        alert("Loser");
        loss ++;
        $(".losses").text("Losses = "+ loss);
        rand = Math.floor(Math.random() * (120-19+1))+19;
        $("#startNumber").text(rand);
    }
});



// function didWin(){ 
//     if (counter === game){
//         counter = 0;
            
//     }
// };

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>jQuery Calculator</title>

//   <!-- Added link to the jQuery Library -->
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//   <!-- Added a link to Bootstrap-->
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

// </head>
// <body>

//   <div class="jumbotron">
//     <h1 class="text-center">jQuery Calculator</h1>
//     <h3 class="text-center">Perform basic mathematic operations using the power of jQuery!</h3>
//   </div>

//   <div class="container">

//     <div class="row">

//       <!-- Calculator Panel -->
//       <div class="col-lg-4">
//         <div class="card">
//           <h3 class="card-header">Calculator</h3>

//           <div class="card-body">
//             <button id="button-1" class="btn btn-primary number" value="1"><h1>1</h1></button>
//             <button id="button-2" class="btn btn-primary number" value="2"><h1>2</h1></button>
//             <button id="button-3" class="btn btn-primary number" value="3"><h1>3</h1></button>
//             <button id="button-plus" class="btn btn-danger operator" value="plus"><h1>+</h1></button>
//             <br><br>
//             <button id="button-4" class="btn btn-primary number" value="4"><h1>4</h1></button>
//             <button id="button-5" class="btn btn-primary number" value="5"><h1>5</h1></button>
//             <button id="button-6" class="btn btn-primary number" value="6"><h1>6</h1></button>
//             <button id="button-minus" class="btn btn-danger operator" value="minus"><h1>&minus;</h1></button>
//             <br><br>
//             <button id="button-7" class="btn btn-primary number" value="7"><h1>7</h1></button>
//             <button id="button-8" class="btn btn-primary number" value="8"><h1>8</h1></button>
//             <button id="button-9" class="btn btn-primary number" value="9"><h1>9</h1></button>
//             <button id="button-multiply" class="btn btn-danger operator" value="times"><h1>&times;</h1></button>
//             <br><br>
//             <button id="button-0" class="btn btn-primary number" value="0"><h1>0</h1></button>
//             <button id="button-divide" class="btn btn-danger operator" value="divide"><h1>&divide;</h1></button>
//             <button id="button-power" class="btn btn-danger operator" value="power"><h1>^</h1></button>
//             <button id="button-equal" class="btn btn-success equal" value="equals"><h1>=</h1></button>
//             <br><br>
//             <button id="button-clear" class="btn btn-dark clear" value="clear"><h1>clear</h1></button>
//           </div>
//         </div>
//       </div>

//       <!-- Result Panel -->
//       <div class="col-lg-6">
//         <div class="card">
//           <h3 class="card-header">Result</h3>
//           <div class="card-body">
//             <h1 id="first-number"></h1>
//             <h1 id="operator"></h1>
//             <h1 id="second-number"></h1>
//             <hr>
//             <h1 id="result"></h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <script type="text/javascript">

//     $(document).ready(function() {

//       // Make our variables global to the runtime of our application
//       var firstNumber = 0;
//       var secondNumber = 0;
//       var operator = "";
//       var result = 0;
//       var isOperatorChosen = false;
//       var isCalculated = false;

//       // Use a function to initialize our calculator.
//       // This way when the user hits clear, we can guarantee a reset of the app.
//       function initializeCalculator() {
//         firstNumber = "";
//         secondNumber = "";
//         operator = "";
//         isOperatorChosen = false;
//         isCalculated = false;

//         $("#first-number, #second-number, #operator, #result").empty();
//       }

//       $(".number").on("click", function() {

//         // Check if we've already run a calculation, if so... we'll just.
//         if (isCalculated) {
//           return false;
//         }

//         // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
//         if (isOperatorChosen) {
//           secondNumber += $(this).val();
//           $("#second-number").text(secondNumber);

//         }
//         else {
//           firstNumber += $(this).val();
//           $("#first-number").text(firstNumber);
//         }

//       });
//       $(".operator").on("click", function() {

//         // Check if a first number has already been selected
//         // Or we've already run a calculation, if so we just exit.
//         if (!firstNumber || isCalculated) {
//           return false;
//         }

//         // Set isOperatorChosen to true so we start writing to secondNumber
//         isOperatorChosen = true;

//         // Store off the operator
//         operator = $(this).val();

//         // Set the HTML of the #operator to the text of what was clicked
//         $("#operator").text($(this).text());

//       });
//       $(".equal").on("click", function() {

//         // If we already clicked equal, don't do the calculation again
//         if (isCalculated) {
//           return false;
//         }

//         // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
//         isCalculated = true;

//         // Use parseInt to convert our string representation of numbers into actual integers
//         firstNumber = parseInt(firstNumber);
//         secondNumber = parseInt(secondNumber);

//         // Based on the operator that was chosen.
//         // Then run the operation and set the HTML of the result of that operation
//         if (operator === "plus") {
//           result = firstNumber + secondNumber;
//         }

//         else if (operator === "minus") {
//           result = firstNumber - secondNumber;
//         }

//         else if (operator === "times") {
//           result = firstNumber * secondNumber;
//         }

//         else if (operator === "divide") {
//           result = firstNumber / secondNumber;
//         }

//         else if (operator === "power") {
//           result = Math.pow(firstNumber, secondNumber);
//         }

//         $("#result").text(result);

//       });
//       $(".clear").on("click", function() {

//         // Call initializeCalculater so we can reset the state of our app
//         initializeCalculator();

//       });

//       // Call initializeCalculater so we can set the state of our app
//       initializeCalculator();
//     });

// </script>

// </body>
// </html>
