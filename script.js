const body = document.body;
const div = document.createElement("div");

// div.innerText = "Hello JOhn";
const strong = document.createElement("strong");
// strong.innerText = "Strong Text"
const button1 = document.querySelector("#button1");
const name = document.querySelector("#name");

function enableButton(){
    if (name.value != ""){ // != operator for not equal
        button1.removeAttribute("disabled");
    } else {
        button1.setAttribute("disabled", true)
    }
}

function disableButton() {
    span2.className = "btn-disable";
}