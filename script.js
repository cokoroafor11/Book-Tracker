const myLibrary = [];


function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    renderBooks();
    clearForm();
}

function updateContainerHeight() {
    const container = document.getElementById('container');
    const containerHeight = container.scrollHeight;
    container.style.height = `${containerHeight}px`;
}

let newBookbtn = document.getElementById('new-book-btn');

newBookbtn.addEventListener('click', function() {
    let newBookForm = document.getElementById("new-book-form");
    console.log(newBookForm);
    if (newBookForm.style.display == "none") 
    {
        newBookForm.style.display = "block";
    } else {
        newBookForm.style.display = "none";
    }
    

})


let newBookForm = document.getElementById("new-book-form");
newBookForm.addEventListener("submit",function(event) {
    event.preventDefault();
    addBookToLibrary();
    newBookForm.style.display = "none";

})

function renderBooks() {
    let cards = document.querySelector("#cards")
    cards.innerHTML = '';

    for (let i=0; i<myLibrary.length;i++) {
        let book = myLibrary[i];
        let elem = document.createElement("div");
        let readToggle;
        elem.classList.add("card")
        

        if (book.read === true) {
            readToggle = 'Read'
        }
        else {
            readToggle = 'Not Read'
        }
        elem.innerHTML = `<div class="book-title">"${book.title}"</div>
                        <div class="author">${book.author}</div>
                        <div class="pages">${book.pages}</div>
                        <div class="read-toggle"><button>${readToggle}</button></div>`;
        cards.appendChild(elem);
    }

    const readToggles = document.querySelectorAll('.read-toggle');
    readToggles.forEach(button => {
        button.addEventListener('click',toggle);
    })
}



function toggle(event) {
    const index = event.target.dataset.index;
    const readButton = event.target;
    myLibrary[index].read = !myLibrary[index].read;
    if (myLibrary[index].read === true) {
        readButton.textContent = 'Read'
    } else {
        readButton.textContent = 'Not Read'
    }
}

function clearForm() {
    document.getElementById("new-book-form").reset();
}

/*
Need to fix toggle
Want to be able to search based on author or book
*/