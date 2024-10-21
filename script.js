function showAll() {
    var books = document.querySelectorAll('.book');
    books.forEach(function(book) {
        book.style.display = 'flex';
    });
}

function showFiction() {
    var books = document.querySelectorAll('.book');
    books.forEach(function(book) {
        if (book.classList.contains('fiction')) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
}

function showNonFiction() {
    var books = document.querySelectorAll('.book');
    books.forEach(function(book) {
        if (book.classList.contains('non-fiction')) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
}
function searchBooks() {
var input, filter, container, books, titles, i, title;
input = document.getElementById('searchInput');
filter = input.value.toUpperCase();
container = document.querySelector('.container');
books = container.querySelectorAll('.book');
for (i = 0; i < books.length; i++) {
    title = books[i].getElementsByTagName("h2")[0];
    if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
        books[i].style.display = "";
    } else {
        books[i].style.display = "none";
    }
}
}
function toggleDescription(book) {
    var description = book.querySelector('.book-description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        var allDescriptions = document.querySelectorAll('.book-description');
        allDescriptions.forEach(function(desc) {
            desc.style.display = 'none';
        });
        
        description.style.display = 'block';
    }
}

function searchBooks() {
  
    var query = document.getElementById('searchInput').value.trim();
    var goodreadsURL = 'https://www.goodreads.com/search?q=' + encodeURIComponent(query);


    window.location.href = goodreadsURL;
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'en-US';

document.getElementById('micButton').addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result', (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('searchInput').value = transcript;
    searchBooks(); // Automatically search after voice input
});

recognition.addEventListener('end', () => {
    recognition.stop();
});

function speakTitle(title, description) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = title + '.  ' + description;
    speech.rate = 1.25; // Speed of speech, adjust as needed
    speech.pitch = 10; // Pitch of the voice, adjust as needed
    speech.lang = 'en-US'; // Language of the speech
    window.speechSynthesis.speak(speech);
}

/*function startEyeTracking() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var x = data.x; // The x coordinate of the gaze
        var y = data.y; // The y coordinate of the gaze
        console.log(x, y); // You can use this data to move the cursor or for other functionalities
    }).begin();

    document.getElementById('startEyeTracker').disabled = true;
    document.getElementById('stopEyeTracker').disabled = false;
}

function stopEyeTracking() {
    webgazer.clearGazeListener();
    webgazer.end();

    document.getElementById('startEyeTracker').disabled = false;
    document.getElementById('stopEyeTracker').disabled = true;
}*/
