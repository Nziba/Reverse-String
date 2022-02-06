// application inputs
let textInput = document.querySelector(".text-input");
let numberOfTimes = document.querySelector(".number-of-times");
let appScreen= document.querySelector(".result-screen");
let ARRAY_OF_REVERSED_TEXTS = []
let storedItemsDiv = document.querySelector('.stored-items')



// application buttons
const storeBtn = document.querySelector(".store-btn");
const reverseBtn = document.querySelector(".reverse-btn");
const historyBtn = document.querySelector(".history-btn");

// APPLICATION LOGIC
// A) Add event listerners to all buttton elements
// (An event listener can be seen as a function that listens for a particular action)

reverseBtn.addEventListener("click",(event)=>{
   // prevent the btn default behaviour
   // get input text
   const inputText = textInput.value;
   // invoke method to encrypt text
   let reversedText = encryptText(inputText)
   // display text to screen
   appScreen.value = reversedText;
   // save reverse text to store
})


storeBtn.addEventListener('click', (event) =>{
    const inputText = textInput.value;
    const reversedText = appScreen.value
    const userHistory = {
        [inputText]: reversedText
    }
    ARRAY_OF_REVERSED_TEXTS.push(userHistory)
// store the array of reversed texts to local storage

// JSON is a js object
localStorage.setItem('userHistory', JSON.stringify(ARRAY_OF_REVERSED_TEXTS))

alert(`Your text ${inputText} was stored`)
})

const encryptText = (text) => {
    return text.split("").reverse().join("")
}

historyBtn.addEventListener('click', (event) =>{

let itemsFromLocalStorage = localStorage.getItem("userHistory")
console.log(itemsFromLocalStorage)

   storedItemsDiv.innerText = itemsFromLocalStorage
    
})


