var ten = 10
var twenty = 20

var addition = ten + twenty
var multiply = ten * twenty
var divide = twenty / ten
var subtract = twenty - ten

document.getElementById("addition").innerHTML = "When I add " + ten + " to " + twenty + " I get " + addition; 
document.getElementById("subtract").innerHTML = "When I subtract " + ten+ " from " + twenty + " I get " + subtract;
document.getElementById("multiply").innerHTML = "When I multiply " + twenty + " by " + ten + " I get " + multiply;
document.getElementById("divide").innerHTML = "When I divide " + twenty + " by " + ten + " I get " + divide;