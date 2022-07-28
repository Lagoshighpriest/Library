// Declare empty array for library

let myLibrary = [];

// Object Constructor
function Book(Title,Author,Pages, Read){
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
    // this.info = ()=>{
    //    return (tittle + author + " , " + pages  + " , " + read)
    // }
}


//  Function for adding a new book to the array

function addBookToLibrary(Title,Author,Pages, Read ){
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBookOnPage();
}


// function to display array to cards

function displayBookOnPage(){
    const books = document.querySelector(".books");

    //Remove all previously displayed cards before I loop over array again
    const removeDivs = document.querySelectorAll(".card");
    console.log("show me the node count of current card divs.....", removeDivs);
    for (let i = 0; i< removeDivs.length; i++) {
        removeDivs[1].remove();
        
    }


    //loop over the library array and display to the cards
    let index = 0
    myLibrary.forEach(myLibraryx =>{
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        //Create remove book button and add class attribute for each array card
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "remove From Library"
        console.log("show me my current array objects inside of foreach....", myLibrary)

        //Link the data attribute of the remove button to the array and card
        removeBookButton.dataset.linkedArray = index;
      
        console.log("show me the dataset link back to thee array.....", removeBookButton.dataset.linkedArray);
        card.appendChild(removeBookButton);

        //Start event listener/remove array item from array and card from parent div via data link

        const removeBookFromLibrary = ()=>{
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            console.log("Attempting to remove array item via data attribute....", parseInt(retrieveBookToRemove(retrieveBookToRemove)));
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            displayBookOnPage();
        }

        removeBookButton.addEventListener("click", removeBookFromLibrary);

        

        //Create read status button and add class attribute for each array card
        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("read-status-button");
        readStatusButton.textContent = "Toggle read Status";

        //Link the data attribute of the toggle read button to the array and card 
        readStatusButton.dataset.linkedArray = index;
        console.log("show me the dataset link back to the array FOR READ STATUS BUTTON....", readStatusButton.dataset.linkedArray);
        card.appendChild(readStatusButton);
        
        //Create event Listener/toggle  logic for array objects prototype for read status change
        const toggleReadStatus = ()=>{
            let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();
            console.log("What is the toggle initial value?...", myLibrary[parseInt(retrieveBookToToggle).Read]);

            //Run check to see what read value is present to toogle from

            if((myLibrary[parseInt(retrieveBookToToggle)].Read) === "Yes"){
                toggleBook.Read = "No";
            }else if ((myLibrary[parent(retrieveBookToToggle)].Read) == "No"){
                toggleBook.Read = "Yes";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            }

            displayBookOnPage();



        }


        readStatusButton.addEventListener("click", toggleReadStatus);

        

        //Loop over the object keys and values and display to each card

        for (let key in myLibraryx){
            console.log(`${key}: ${myLibraryx[key]}`);
            const para = document.createElement("p");
            para.textContent = `${key}: ${myLibraryx[key]}`;
            card.appendChild(para);
        }


    index++;
    })
    
}

// addBookToLibrary("The Hobbit", "J.R.R Tolkiem", "295 pages", "Not Read yet");
// addBookToLibrary("The Hobbit", "J.R.R Tolkiem", "295 pages", "Not Read yet");
// addBookToLibrary("The Hobbit", "J.R.R Tolkiem", "295 pages", "Not Read yet");
// addBookToLibrary("The Hobbit", "J.R.R Tolkiem", "295 pages", "Not Read yet");

console.log("End of code array contents". myLibrary)
displayBookOnPage();


//Start event listener/add input to add a new book to library

let displayTheForm = ()=>{
    document.getElementById("add-book-form").style.display = "";
}

const addBookButton = document.querySelector(".add-book-button")
addBookButton.addEventListener("click", displayTheForm);



let intakeFormData = ()=>{
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    //Break out if form is incomplete or not valid
    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")){
        return;
    }
    addBookToLibrary(Title, Author, Pages, Read);

    // Reset the form after successful submission
    document.getElementById("add-book").requestFullscreen()
}



//Start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", intakeFormData);





const clearForm =()=>{
    document.getElementById("add-book").requestFullscreen();
}


// Start event listener for clear form button 
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);




