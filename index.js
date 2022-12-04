let Home = document.getElementById("home")
let Guest = document.getElementById("guest")
let num1 = 0
let num2 = 0


/*if(num1 > num2){
    let Num1 = num1.fontcolor("green");
    Num1 = "<span style='color:green'>" + num1 + "</span>";
    
    let Num2 = num2.fontcolor("red");
    Num2 = "<span style='color:red'>" + num2 + "</span>";
}else{
    let Num1 = num1.fontcolor("red");
    Num1 = "<span style='color:red'>" + num1 + "</span>";
    
    let Num2 = num2.fontcolor("green");
    Num2 = "<span style='color:green'>" + num2 + "</span>";
}*/




function first1() {
    num1 += 1
    Home.textContent = num1
}
function second1() {
    num1 += 2
    Home.textContent = num1
}
function third1() {
    num1 += 3
    Home.textContent = num1
}



function first2() {
    num2 += 1
    Guest.textContent = num2
}
function second2() {
    num2 += 2
    Guest.textContent = num2
}
function third2() {
    num2 += 3
    Guest.textContent = num2
}

function reset() {
    num1 = 0
    Home.textContent = num1
    num2 = 0
    Guest.textContent = num2
}

