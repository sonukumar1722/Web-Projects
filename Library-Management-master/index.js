// Implementing method of JavaSctipts using old prototype  methods

// Constructor
function Book(Name, Author, Type) {
    this.name = Name;
    this.author = Author;
    this.type = Type;
}

// Display Constructor
function Display() {}


// Add method to Display prototype
Display.prototype.add = function (book) {
    // console.log("adding to UI");
    let tableBody = document.getElementById('tableBody');

    let template = `<tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                 </tr>`;
    tableBody.innerHTML += template;
}

// Implement validation rule function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Implement clear function
Display.prototype.clear = function (book) {
    document.getElementById('libraryform').reset();
}

// Displaying the messege (Success or Error)
Display.prototype.show = function (type, alert, displayMessage) {
    let messege = document.getElementById('message');
    messege.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${alert}</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    // Messsage disapears after some time
    setTimeout(function show() {
        messege.innerHTML = '';
    }, 4000);
}


// Add submit event listner to libraryform
let formsubmit = document.getElementById('libraryform');
formsubmit.addEventListener('submit', addLibraryBook);

function addLibraryBook(e) {
    // console.log("submited the book to the library");

    e.preventDefault();


    let bookname = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    let comic = document.getElementById('comic');
    let mythology = document.getElementById('mythology');
    let scifi = document.getElementById('scifi');

    let type;
    // checked statemnet value
    if (comic.checked) {
        type = comic.value;
    }
    else if (mythology.checked) {
        type = mythology.value;
    }
    else if (scifi.checked) {
        type = scifi.value;
    }


    let book = new Book(bookname, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Success:', ' Your book has been successfully submited.');
    }
    else {
        // Show error Massege
        display.show('danger', 'Error!!', ' Sorry you can not submit this book.');
    }

}