// Implementing methods of JavaScripts using new ES6 version

// recalling from localStorage
lists();

// Creating book details Object
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

// other attributs and function
class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");

    // Addding tamplate to the table body
    let template = `<tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                     <td><button type="button" id="delete" class="btn btn-danger">Delete</button></td>
                 </tr>`;
    tableBody.innerHTML += template;
  }

  //   Clear method
  clear() {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
  }

  //   Show masseges according to the input values
  show(type, alert, displayMessage) {
    let messege = document.getElementById("message");
    messege.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${alert}</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    // Messsage disapears after some time
    setTimeout(function show() {
      messege.innerHTML = "";
    }, 3000);
  }

  //   Validating the details enterd by the user
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
}

// Add submit event listner to libraryform
let formsubmit = document.getElementById("libraryform");
formsubmit.addEventListener("submit", addLibraryBook);

function addLibraryBook(e) {
  // console.log("submited the book to the library");
  e.preventDefault();

  let bookname = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let comic = document.getElementById("comic");
  let mythology = document.getElementById("mythology");
  let scifi = document.getElementById("scifi");
  let del = document.getElementById("delete");

  let type;
  // checked statemnet value
  if (comic.checked) {
    type = comic.value;
  } else if (mythology.checked) {
    type = mythology.value;
  } else if (scifi.checked) {
    type = scifi.value;
  }

  // Book object
  let book = new Book(bookname, author, type);////////////////////////////////////////////////////

  // Adding books to localStorage
  let knowledge = localStorage.getItem("books");
  if (knowledge == null) {
    bookObj = [];
  } else {
    bookObj = JSON.parse(knowledge);
  }

  //   Book object to convert into string and store in localStorage
  let store = {
    Name: bookname,
    Author: author,
    Type: type,
  };

  //   stroging object into an array
  bookObj.push(store);
  //   Adding to the localStorage
  localStorage.setItem("books", JSON.stringify(bookObj));
  //   console.log(book);

  //   Creating instanceof of class Display to use class methods/function
  let display = new Display();/////////////////////////////////////////////////////////////
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show(
      "success",
      "Success:",
      " Your book has been successfully submited."
    );
  } else {
    // Show error Massege
    display.show("danger", "Error!!", " Sorry you can not submit this book.");
  }
}

// Function to delete a note
function deleteBook(index) {
  let books = localStorage.getItem("books");
  if (books == null) {
    bookObj = [];
  } else {
    // convert string to Array
    bookObj = JSON.parse(books);
  }

  // splice method delete elements  (start_index, length)
  bookObj.splice(index, 1);
  // covert array to string to store in local storage and updating localstorage after deleting the item
  localStorage.setItem("books", JSON.stringify(bookObj));
}

// Function to list the books after loading/refershing the page (retriving the data form the local storage)
function lists() {
  let tableBody = document.getElementById("tableBody");
  let localStorageList = JSON.parse(localStorage.getItem("books"));

  // if localStorage in not empty
  if (localStorageList != null) {
    localStorageList.forEach((element, index) => {
        // Validating the values 
      if (element["Name"].length > 2 && element["Author"].length > 2) {
        let template = `<tr>
                     <td>${element["Name"]}</td>
                     <td>${element["Author"]}</td>
                     <td>${element["Type"]}</td>
                     <td><a href="#" id=${index} onclick="deleteBook(this.id)" class="btn btn-danger">Delete</a></td>
                 </tr>`;
        tableBody.innerHTML += template;
      }
    });
  }
}
