"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enums_1 = require('./enums');
var classes_1 = require('./classes');
var util = require('./lib/utilityFunctions');
require('./LibrarianExtension');
//destructuring arrays and objects
function PrintBookInfo(_a) {
    var booktitle = _a.title, bookauthor = _a.author;
    console.log(booktitle + " was authored by " + bookauthor);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
//PrintBookInfo(book1);
//PrintBookInfo(book2);
function LogFavoriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
//LogFavoriteBooks(util.GetAllBooks());
var booktitle = book1.title, bookauthor = book1.author;
var title = book1.title, author = book1.author;
// console.log(title);
// console.log(author);
// console.log(booktitle);
// console.log(bookauthor);
// spread operator
var schoolBooks = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: enums_1.Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: enums_1.Category.Fiction }
];
var booksRead = util.GetAllBooks();
booksRead.push.apply(booksRead, schoolBooks);
//console.log(booksRead);
var poets = ['Shelley', 'Collins', 'Hughes'];
var authors = ['Tolstoy', 'Fitzgerald'].concat(poets);
//console.log(authors);
// tuples
var catalogLocation = ['A 123.456', book1];
// console.log(catalogLocation);
catalogLocation[3] = book1;
var catalogLocation2 = ['A 123.456', book1];
catalogLocation2[2] = 'some string';
// console.log(catalogLocation2);
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
// let readingMaterial: Book | Magazine = allBooks[0];
var readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);
var serialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press'
};
// mixin - multiple inheritance
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        //console.log(baseCtor, baseCtor.prototype);
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_1.UniversityLibrarian();
//newLibrarian.doResearch("Math");
var frequency = 'annually';
var myfreq = 'monthly';
function GetMagazineByFrequency(preferredFrequency) {
    // do something here
}
///////////////////////
// polymorphic this
var LibraryBook = (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.Checkout = function () {
        // do checkout stuff
        console.log('Checking out a book.');
        return this;
    };
    LibraryBook.prototype.Checkin = function () {
        // do checkin stuff
        //console.log('Checking in a book.');
        if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook.');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking in an ElectronicBook.');
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        _super.apply(this, arguments);
    }
    ChildrensBook.prototype.Clean = function () {
        // clean the crayon marks
        console.log('Cleaning a book.');
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        _super.apply(this, arguments);
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log('Removing book from device.');
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidbook = new ChildrensBook();
// kidbook
//     .Checkin()
//     .Clean()
//     .Checkout();
// let ebook = new ElectronicBook();
// ebook.Checkin()
//     .RemoveFromCustomerDevice()
//     .Checkout();
// mergin
var mergedBook;
var newLibrarian2 = new classes_1.UniversityLibrarian();
newLibrarian2.phone = '514-444';
newLibrarian2.department = 'british';
//newLibrarian2.hostSeminar('literature');
// type guards
function logVisitor(param) {
    if (typeof param === 'number') {
        console.log(param + " new visitors arrived.");
    }
    else {
        console.log(param.toUpperCase() + " visited.");
    }
}
// logVisitor(5);
// logVisitor('Leigh Ann');
var lib = new classes_1.UniversityLibrarian(); // PublicLibrarian();
// if (lib instanceof UniversityLibrarian) {
//     lib.assistCustomer('dan');
// }
// if (lib instanceof PublicLibrarian) {
//     lib.teachCommunity();
// }
//custom type guards
function isBook(text) {
    return text.author !== undefined;
}
var readingMaterial3 = util.GetAllBooks()[0];
var reading4 = util.GetAllMagazines()[0];
// if(isBook(reading4)) {
//     console.log(`The book's author is ${reading4.author}.`);
// }
// else {
//     console.log(`The magazine's publisher is ${reading4.publisher}.`);
// }
//symbols
var mySymbol = Symbol('first_symbol');
var anotherSymbol = Symbol('first_symbol');
//console.log(mySymbol === anotherSymbol);
//console.log(typeof mySymbol);
var myObject = (_b = {},
    _b[mySymbol] = 'value for my symbol key',
    _b
);
//console.log(myObject[mySymbol]);
var librarian2 = new classes_1.UniversityLibrarian();
//librarian2[CLASS_INFO]();
var libraryCustomer = {
    name: 'Thorne',
    assistCustomer: function (custName) { return console.log("Assisting " + custName); }
};
libraryCustomer.assistCustomer('danson');
if (libraryCustomer instanceof classes_1.UniversityLibrarian) {
    console.log('A helpful librarian.');
}
else {
    console.log('Not a librarian.');
}
var _b;
//# sourceMappingURL=app.js.map