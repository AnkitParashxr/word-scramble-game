const wordText = document.querySelector(".word");
const wordHint = document.querySelector(".hintspan");
const wordTimer = document.querySelector(".time span b");
const inputWord = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
let correctWord,timer;

const inittimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime>0)
        {
            maxTime--;
            return wordTimer.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert(`Times Up!!`)
        initGame(); // restart the game
    }, 1000);
}
const initGame = () =>{
    
    document.body.style.backgroundColor = "#82AAE3";
    inittimer(30);
    let randomObj = words[Math.floor(Math.random()* words.length)];
    let wordArray = randomObj.word.split(""); // e x a p a n s i o n
    // now for swaaping the values of array for making the word jumbled
    for(let i= wordArray.length-1;i>0;i--)
    {
        let j = Math.floor(Math.random()* (i+1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j]
        wordArray[j] = temp;
    }

    correctWord = randomObj.word.toLowerCase();
    // mainpulating the word in html
    wordText.innerHTML = wordArray.join("");
    
    // mainupulating the hint
wordHint.innerHTML = randomObj.hint;

inputWord.value = ""; // making input field empty again
inputWord.setAttribute("maxlength",correctWord.length);
    console.log(randomObj);
}

initGame();

const checkWord = () =>{
    let userWord = inputWord.value.toLocaleLowerCase();
    console.log(userWord)
    console.log(correctWord)
    if(!userWord)
    {
        alert(`Please Enter a Word`)
    }
    else if(correctWord!==userWord)
    {
        document.body.style.backgroundColor = "red";
    }
    else{
        document.body.style.backgroundColor = "#54B435";
    }
}

refreshBtn.addEventListener("click",initGame);// this basically calls game function if refresh button is pressed
checkBtn.addEventListener("click",checkWord)