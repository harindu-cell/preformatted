console.log("hello world");
var buttonElement = document.getElementById("submit");
var nameElement = document.getElementById("name");
console.log(nameElement);
console.log(nameElement.value); 
buttonElement.addEventListener("click", 
    async(event)=>{
        event.preventDefault();
        var name = await nameElement.value;
        console.log(name);
        let num = window.prompt("hello");
        console.log=num;
        nameElement.value="";
    }
);

let userName = prompt("Please enter your name", "Your Name");
if (userName) {
    alert("Welcome, " + userName + "!");
}

let num = prompt("hello");
alert(num);