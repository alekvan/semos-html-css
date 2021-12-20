class Book {
  constructor(isbn, name, author, year) {
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.year = year;
  }
}

//instancirame objekt od klasata book so vrednostite vneseni vo html formata

const addNewBook = () => {
  const isbn = document.getElementById("isbn").value;
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  if (checkIfExists(isbn)) {
    return;
  }

  const NewBook = new Book(isbn, name, author, year);
  localStorage.setItem(NewBook.isbn, JSON.stringify(NewBook));
  console.log(JSON.parse(localStorage.getItem(NewBook.isbn)));
};

const checkIfExists = (isbn) => {
  if (localStorage.getItem(isbn)) {
    console.log("error already exists");
    return true;
  }
  return false;
};
