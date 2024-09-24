let isBlue = true;

function showAlert(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    alert(`Hi ${name}!`);
}

function changeColor() {
    document.body.style.backgroundColor = isBlue ? 'red' : 'blue';
    isBlue = !isBlue; // Toggle the color state
}

function validateText(event) {
    event.preventDefault();
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('There is a special character in the text!');
    } else {
        alert('Text is valid.');
    }
}

function addText() {
    const title = document.getElementById('page-title');
    title.textContent += ' Add Text';
}
