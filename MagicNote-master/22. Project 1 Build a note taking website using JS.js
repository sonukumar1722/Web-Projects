showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj ={
        title: title.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    title.value = "";
    showNotes();
});


// function to mark the note
function markNote(index){
   let  mark = index;
    let card = document.getElementsByClassName('noteCard');
    console.log(card[index]);
    card[index].style.boxShadow='8px 8px 8px green, -8px -8px 8px red';
    localStorage.setItem('mark',JSON.parse(mark));
}

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        // here parseInt exrtact Integer part, Math.random generate floating number between 0 to 1
        html += `<div class="noteCard my-2 mx-2 card  mb-3" style="width: 18rem;">
        <div class="control">
        <a href="#" id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">x</a>
        <a href="#" id="${index}" onclick="markNote(this.id)" class="btn btn-mark btn-danger">#</a>
        </div>
        <div class="card-body">
            <div class="searchTxt card-title"><b>${element.title}</b></div>
            <p class="searchTxt card-text"> ${element.text}</p >
        </div >
    </div > `;

    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}

// Function to delete a note
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } 
    else {

        // convert string to Array
        notesObj = JSON.parse(notes);
    }


    // splice method delete elements  (start_index, length)
    notesObj.splice(index, 1);
    // covert array to string to store in local storage and updating localstorage after deleting the item
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById('searchTxt');
// current input show result "input"
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxtTitle = element.getElementsByClassName("searchTxt")[0].innerText;
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt,cardTxtTitles);
        if (cardTxt.includes(inputVal) || cardTxtTitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 


// add a file and syn with notes (write file sync) to sotre to user data and retrive