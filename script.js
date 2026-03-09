const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const toggle = document.getElementById("themeToggle");
const calculator = document.getElementById("calculator");

let expression = "";


buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.dataset.value;

if(value === "C"){
expression = "";
display.textContent = "0";
return;
}

if(value === "="){
try{
expression = eval(expression).toString();
display.textContent = expression;
}catch{
display.textContent = "Error";
expression="";
}
return;
}

expression += value;
display.textContent = expression;

});

});



toggle.addEventListener("click", ()=>{

if(calculator.classList.contains("dark")){

calculator.classList.remove("dark");
calculator.classList.add("light");

}else{

calculator.classList.remove("light");
calculator.classList.add("dark");

}

});