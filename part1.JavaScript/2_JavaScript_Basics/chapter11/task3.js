/*
Write code that will ask for a login using the prompt function.
- If the visitor enters 'Admin', then the prompt function will ask for a password. 
- If nothing is entered or the Esc key is pressed, show 'Canceled'. 
- Otherwise, display 'I don't know you'.

To check the password:
- If the password entered is 'I am the boss', display 'Hello!',
- Otherwise, display 'Wrong password',
- If canceled, display 'Canceled'.
*/

let login = prompt("Enter login", "");
if (login === "Admin") {
    let password = prompt("Enter password", "");
    if (password === "I am the boss") {
        alert("Hello!");
    } else if (login === "" || login === null) {
        alert("Canceled");
    } else {
        alert("Wrong password")
    }
} else if (login === "" || login === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}