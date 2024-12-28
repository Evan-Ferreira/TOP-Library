const myLibrary = [];

const submitButton = document.querySelector('.submit-button');
const bookAuthor = document.querySelector('.book-author');
const bookTitle = document.querySelector('.book-title');
const bookPages = document.querySelector('.book-pages');
const formMessage = document.querySelector('.form-message');
const library = document.querySelector('.library');

function Book(title, author, pages, read = 'no') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

submitButton.addEventListener('click', () => {
    if (
        bookTitle.value === '' ||
        bookAuthor.value === '' ||
        bookPages.value === ''
    ) {
        formMessage.textContent = 'Please fill out all fields';
        console.log('dddd');
        return;
    }
    const newBook = new Book(
        bookTitle.value,
        bookAuthor.value,
        bookPages.value
    );
    myLibrary.push(newBook);
    addBookToLibrary(newBook);
});

function addBookToLibrary(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const index = myLibrary.length - 1;
    bookDiv.setAttribute('index', index);
    library.appendChild(bookDiv);
    bookDiv.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        `;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';
    removeButton.classList.add('remove-button');
    const readButton = document.createElement('button');
    readButton.textContent = 'Read Toggle';
    readButton.classList.add('read-button');
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeBook(index);
    });
    readButton.addEventListener('click', () => {
        readBook(index);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    const bookDiv = document.querySelector(`.book[index="${index}"]`);
    if (bookDiv) {
        bookDiv.remove();
    }
}

function readBook(index) {
    const book = myLibrary[index];
    const readStatus = book.read === 'yes' ? 'no' : 'yes';
    book.read = readStatus;
    const bookDiv = document.querySelector(`.book[index="${index}"]`);
    const read = bookDiv.querySelector('.read-button');
    read.textContent = `${readStatus}`;
}
