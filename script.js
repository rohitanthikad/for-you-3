let noClickCount = 0;
const noMessages = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Are you positive???",
    "Panda please",
    "Just think about it",
    "If you say no, I'll be very sad :(",
    "I'll be very very sad :((",
    "I'll be very very very sad ;(",
    "I'll be very very very very sad ;((",
    "Fineeee I'll stop asking...",
    "JUST KIDDING PLEASE SAY YES",
    "I'll be very very very very very sad ;(((",
    "You're breaking my heart </3"
];

function resizeButtons() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    // Get current padding sizes
    var yesPadding = window.getComputedStyle(yesButton).padding.split('px')[0];
    var noPadding = window.getComputedStyle(noButton).padding.split('px')[0];

    // Decrease padding of No button and increase padding of Yes button
    noButton.style.padding = (parseInt(noPadding) - 2) + 'px ' + (parseInt(noPadding) - 2) + 'px';
    yesButton.style.padding = (parseInt(yesPadding) + 2) + 'px ' + (parseInt(yesPadding) + 2) + 'px';

    // Update no button text
    noButton.innerText = noMessages[noClickCount % noMessages.length];
    noClickCount++;
}

function yesClicked() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var questionText = document.querySelector('h1'); // Select the question text

    // Hide both buttons and the question text
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    questionText.style.display = 'none';

    // Display the message
    var card = document.querySelector('.card');
    var message = document.createElement('h1');
    message.innerText = "Okayyy yayyyy!!! ilyyyy <33";
    card.appendChild(message);

    // Change the image
    var imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = '<img src="images/kissing-dog.gif" alt="Kissing dog GIF">';
}
