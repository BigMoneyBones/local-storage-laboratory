// Challenge #1 String Saver!*****************************************************

// Query Selectors
let stringSaverForm = document.querySelector("#string-saver-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");
let inputButton = document.querySelector("#submit");

// set initial value of the 'savedStringValue 'key so the if statement will run
let savedStringValue = localStorage.getItem("savedStringValue");

if (savedStringValue === null) {
  // If there has been no value submitted in the input field... (initially there is nothing)
  savedString.innerHTML = "Nothing Saved - Please submit an item into the form";
} else {
  // After clicking "submit" the input text will display
  savedString.innerHTML = savedStringValue;
}

stringSaverForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page from automatically refreshing

  //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
  localStorage.setItem("savedStringValue", stringInput.value);

  //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
  console.log(localStorage.getItem("savedStringValue"));

  // after setting value of 'savedStringValue' (line 23) we want to 'get' the new value so it will log to the screen on 'submit'
  savedStringValue = localStorage.getItem("savedStringValue");

  savedString.innerHTML = savedStringValue; // Saves text input on submit
});

// Challenge #2 Page Load Counter ************************************************

// Query Selectors
const pageCounter = document.querySelector("#page-load-counter");

// Variables

// Initial key value set so if statement will run
let savedCount = localStorage.getItem("savedCount");
// If savedCount key value is null (it will be on initialization), set the value to 0
if (savedCount === null) {
  savedCount = 0;
  pageCounter.innerHTML = savedCount;
} else {
  pageCounter.innerHTML = savedCount;
}
// Each time the page is refreshed, the code will run incrementing the count.
savedCount++;
// Set the key value to the number corresponding to the refresh count inside 'local storage'
localStorage.setItem("savedCount", savedCount);

// Challenge #3 List Builder ******************************************************

// Query Selectors
let listBuilderForm = document.querySelector("#list-builder-form");
let listInput = document.querySelector("#list-input");
let orderedList = document.querySelector("#ordered-list");

let arrayList = localStorage.getItem("arrayList");

function createListArray() {
  arrayList = localStorage.getItem("arrayList");
  if (arrayList === null) {
    arrayList = [];
  } else {
    arrayList = JSON.parse(arrayList);

    for (let arrayListItem of arrayList) {
      console.log(arrayListItem);
      let arrayListItemElement = document.createElement("li");
      arrayListItemElement.innerHTML = arrayListItem;
      orderedList.appendChild(arrayListItemElement);
    }
  }
}

createListArray();

listBuilderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let newListItem = listInput.value;

  arrayList.push(newListItem);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  console.log(arrayList);

  let listItemElement = document.createElement("li");
  orderedList.appendChild(listItemElement);
  listItemElement.innerHTML = newListItem;
});
