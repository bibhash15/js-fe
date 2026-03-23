const red_button = document.getElementById("red");
const green_button = document.getElementById("green");
const blue_button = document.getElementById("blue");
const yellow_button = document.getElementById("yellow");
const reset_button = document.getElementById("reset");

red_button.addEventListener("click" , () => {
    document.body.style.backgroundColor = "red";
});

green_button.addEventListener("click" , () =>{
    document.body.style.backgroundColor ="green";
});

blue_button.addEventListener("click" , () =>{
    document.body.style.backgroundColor ="blue";
});

yellow_button.addEventListener("click" , () =>{
    document.body.style.backgroundColor ="yellow";
});

reset_button.addEventListener("click" , ()=> {
    document.body.style.backgroundColor ="white";
});

