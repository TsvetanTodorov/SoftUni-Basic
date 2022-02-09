function oldBooks(input) {

    let favouriteBook = input.shift()
    let currentBook = input[0];
    let index = 1;
    let isValid = true;

    while (currentBook !== favouriteBook) {
        currentBook = input[index];
        index++;
        if (currentBook === "No More Books") {
            isValid = false
            break;
        }
        continue;
    }
    if (!isValid) {
        console.log(`The book you search is not here!\nYou checked ${index-1} books.`)
    } else {
        console.log(`You checked ${index-1} books and found it.`)
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
    "Bourne"
])