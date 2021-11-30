//THIS IS A BOOK LENDING CONSOLE APP DESIGNED WITH PROTOTYPE DESIGN PARTTERN

//BOOKSTORE IS THE CONTAINER THAT CONTAINS ALL THE BOOKS
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


//THIS METHOD IS USED TO CHECK IF A BOOKS ALREADY EXIST THE BOOKSTORE
function check_if_book_exists_in_the_store(book_title) {
  for (let index = 0; index < bookStore.length; index++) {
    const element = bookStore[index];

    if (element.book_title == book_title) {
      return book_title;
    }
  }
}

function addTwoNumbers(a, b) {
  return a * b;
}


//THIS METHOD IS USED TO ADD BOOKS INTO THE BOOKSTORE
function addBook(book_title, authors_name, no_of_pages) {
    let newBook = {};
    newBook["book_title"] = book_title;
    newBook["author_name"] = authors_name;
    newBook["no_of_pages"] = no_of_pages;
    newBook["lent"] = false;
    bookStore.push(newBook);
    return {
      "book_title" : book_title,
      "author":  authors_name,
      "no_of_pages" : no_of_pages,
      "lent": false
    }
  }

  //THIS METHOD IS USED TO LEND BOOKS FROM THE BOOKSTORE
  function lend_book(book_title, authors_name) {
    for (let index = 0; index < bookStore.length; index++) {
      const element = bookStore[index];

      if (element.lent == true) {
        console.log("this book is not available  for lending");
      } else if (element.book_title == book_title) {
        bookStore[index].lent = true;
        console.log(`you just lent ${book_title} from our book store`);
        console.log(element.lent);
        return {
            "book_title": book_title,
            "lent": element.lent
        }
      }
    }
  }

  
  //THIS METHOD IS USED TO RETURN RENTED BOOKS BACK TO THE STORE
  function return_book(book_title){
    for (let index = 0; index < bookStore.length; index++) {
        const element = bookStore[index];
        
        if (element.book_title == book_title && element.lent == true) {
            element.lent = false;
            console.log("thank you for returning the book you lent from our store");
            return {
                "book_title": book_title,
                "lent": false
            }
        }
    }
}

//THIS METHOD IS USED TO VIEW ALL THE BOOKS AVAILABLE IN THE BOOKSTORE
function view_all_books(bookStore){
    for (let index = 0; index < bookStore.length; index++){
        const element = bookStore[index];
            console.log(element.book_title);
            return bookStore.length
    }
  }


module.exports = {
  check_if_book_exists_in_the_store,
  addTwoNumbers,
  addBook,
  lend_book,
  return_book,
  view_all_books
};
