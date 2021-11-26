// class Book {
//   // klasite sodrzat properties i methods
//   constructor(name, author, year, isbn) {
//     //property binding
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.isbn = isbn;
//   }
// }
// return {};

// //objektot kniga e instanca od klasata book
// const Kniga = new Book();

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const Rect1 = new Rect(32, 20);
const area = Rect1.getArea();
console.log(area);
