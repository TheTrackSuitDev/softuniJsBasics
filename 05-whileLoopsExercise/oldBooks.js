function oldBooks(input) {
    let index = 0;
    let bookToFind = input[index];
    index++;
    let booksChecked = 0;
    let nextBook = input[index];
    index++;
    while (nextBook != bookToFind && nextBook != "No More Books") {
        nextBook = input[index];
        index++;
        booksChecked++;
    }
    if (nextBook === bookToFind) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else if (nextBook === "No More Books"){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);
    }   
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])