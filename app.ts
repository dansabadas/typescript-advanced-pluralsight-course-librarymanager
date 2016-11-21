import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher, PublicLibrarian } from './classes';
import * as util from './lib/utilityFunctions';
import './LibrarianExtension';

//destructuring arrays and objects
function PrintBookInfo({title: booktitle, author: bookauthor}: Book): void {
    console.log(`${booktitle} was authored by ${bookauthor}`);
}

let [book1, book2] = util.GetAllBooks();

//PrintBookInfo(book1);
//PrintBookInfo(book2);

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

//LogFavoriteBooks(util.GetAllBooks());

let { title: booktitle, author: bookauthor } = book1;
let { title, author } = book1;

// console.log(title);
// console.log(author);
// console.log(booktitle);
// console.log(bookauthor);

// spread operator
let schoolBooks: Book[] = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction }
];

let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
//console.log(booksRead);

let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
//console.log(authors);

// tuples
let catalogLocation: [string, Book] = ['A 123.456', book1];
// console.log(catalogLocation);
catalogLocation[3] = book1;
// console.log(catalogLocation);
interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

let catalogLocation2: KeyValuePair<string, Book> = ['A 123.456', book1];
catalogLocation2[2] = 'some string';
// console.log(catalogLocation2);

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

// let readingMaterial: Book | Magazine = allBooks[0];
let readingMaterial: PrintMaterial = allBooks[0];
function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}

// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);

let serialNovel: Book & Magazine = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction,
    publisher: 'Serial Press'
};

// mixin - multiple inheritance
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        //console.log(baseCtor, baseCtor.prototype);
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(UniversityLibrarian, [Employee, Researcher]);
let newLibrarian = new UniversityLibrarian();
//newLibrarian.doResearch("Math");

let frequency: 'monthly' | 'annually' = 'annually';
type Frequency = 'monthly' | 'annually';

let myfreq: Frequency = 'monthly';
function GetMagazineByFrequency(preferredFrequency: Frequency) {
    // do something here
}

type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;

///////////////////////
// polymorphic this
class LibraryBook {
	Checkout(): this {
        // do checkout stuff
        console.log('Checking out a book.');
        return this;
    }

    Checkin(): this {
        // do checkin stuff
        //console.log('Checking in a book.');
		if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook.');
        }

        if (this instanceof ElectronicBook) {
            console.log('Checking in an ElectronicBook.');
        }        
        return this;
    }    
}

class ChildrensBook extends LibraryBook {
    Clean(): this {
        // clean the crayon marks
        console.log('Cleaning a book.');
        return this;
    }
}

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice(): this {
        console.log('Removing book from device.');
        return this;
    }
}

let kidbook = new ChildrensBook();
// kidbook
//     .Checkin()
//     .Clean()
//     .Checkout();

// let ebook = new ElectronicBook();
// ebook.Checkin()
//     .RemoveFromCustomerDevice()
//     .Checkout();

// mergin
let mergedBook: Book;

let newLibrarian2 = new UniversityLibrarian();
newLibrarian2.phone = '514-444';
newLibrarian2.department = 'british';
//newLibrarian2.hostSeminar('literature');

// type guards
function logVisitor(param: number | string) {
    if (typeof param === 'number') {
        console.log(`${param} new visitors arrived.`);
    }
    else {
        console.log(`${param.toUpperCase()} visited.`);
    }
}

// logVisitor(5);
// logVisitor('Leigh Ann');

let lib: Librarian = new UniversityLibrarian();// PublicLibrarian();

if (lib instanceof UniversityLibrarian) {
    lib.assistCustomer('dan');
}
if (lib instanceof PublicLibrarian) {
    lib.teachCommunity();
}

//custom type guards
function isBook(text: Book | Magazine): text is Book {
    return (<Book>text).author !== undefined;
}

let readingMaterial3: Book | Magazine = util.GetAllBooks()[0];

let reading4 = util.GetAllMagazines()[0];

if(isBook(reading4)) {
    console.log(`The book's author is ${reading4.author}.`);
}
else {
    console.log(`The magazine's publisher is ${reading4.publisher}.`);
}

//symbols
