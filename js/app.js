"use strict";
var util = require('./lib/utilityFunctions');
function PrintBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
PrintBookInfo(book1);
PrintBookInfo(book2);
//# sourceMappingURL=app.js.map