const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // submit 기본동작(새로고침)을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // save username in localStorage
    localStorage.setItem(USERNAME_KEY, username);
    // greeting message
    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 새로고침시 savedUsername의 값에 따라 표시되는 것이 달라짐
if (savedUsername === null) { 
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}