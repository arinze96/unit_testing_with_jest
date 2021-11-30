const { expect } = require("@jest/globals");
const {
  check_if_book_exists_in_the_store,
  addBook,
  lend_book,
  return_book,
  view_all_books,
} = require("./main");

let bookStore = [
  {
    book_title: "Knight Templers",
    author_name: "livingsthon bannes",
    no_of_pages: 460,
    lent: false,
  },
  {
    book_title: "The Power of The Mind",
    author_name: "Brain Tracy",
    no_of_pages: 460,
    lent: false,
  },
];

//THIS TEST IS CHECCKING IF A PARTICULAR BOOK EXISTS ALREADY IN THE BOOKSTORE
test("check if a particular book exist in the bookstore", () => {
  for (let index = 0; index < bookStore.length; index++) {
    const element = bookStore[index];
    expect(check_if_book_exists_in_the_store("Knight Templers")).toBe(
      "Knight Templers"
    );
  }
});

// THIS TEST IS FOR ADDING A BOOK IN THE BOOKSTORE
test("add book to the book store", () => {
  expect(addBook("Knights of dark soul", "Jerome welsh", 350)).toEqual({
    book_title: "Knights of dark soul",
    author: "Jerome welsh",
    no_of_pages: 350,
    lent: false,
  });
});

//THIS TEST IS FOR CHECKING A LENDING OPERATION ON THE BOOKSTORE
test("lend book from the book store", () => {
  expect(lend_book("Knight Templers")).toEqual({
    book_title: "Knight Templers",
    lent: true,
  });
});

//THIS TEST IS CHECKING FOR A RETURN OPERATION OF BOOKS BORROWED
test("return a borrowed book", () => {
  expect(return_book("Knight Templers")).toEqual({
    book_title: "Knight Templers",
    lent: false,
  });
});


//THIS TEST IS CHECKING FOR ALL THE BOOKS AVAILABLE ON THE BOOKSTORE
test("view all the books in the bookstore", () => {
  expect(view_all_books(bookStore)).toBe(bookStore.length);
});
