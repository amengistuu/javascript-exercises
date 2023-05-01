const getTheTitles = function(books) {
    let listOfBookTitles = [];
    for (let i = 0; i < books.length; i++) {
        listOfBookTitles[i] = books[i].title;
    }
    return listOfBookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
