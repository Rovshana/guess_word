const inputs = document.querySelector('.inputs')
const resetBtn = document.querySelector('.reset-btn')
const hint = document.querySelector('.hint span')
const wrongLetters = document.querySelector('.wrong-letter span')
const guessLeft = document.querySelector('.guess-left span')
const typingInput = document.querySelector('.typing-input')
let word, maxGuesses, corrects =[],  incorrects =[]
function randomWord(){
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random()* wordList.length)]
    
    // getting random word from wordlist
    word = ranObj.word
    maxGuesses = 8; corrects =[],  incorrects =[]
   
    hint.innerHTML = ranObj.hint
    guessLeft.innerHTML = maxGuesses;
    wrongLetters.innerHTML = incorrects;
    let html = "";
    for(let i =0; i < word.length; i++){
        html += `<input type="text" disabled>`

    }
    inputs.innerHTML = html;
}
function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}` && !corrects.includes(key))){
  
    if(word.includes(key)){
        for(let i = 0; i < word.length; i++){
            if(word[i]===key){
                corrects.push(key)
                inputs.querySelectorAll('input')[i].value = key;
            }
        }

    } else{
        maxGuesses--;
        incorrects.push(` ${key}`)
    }
    } 
    guessLeft.innerHTML = maxGuesses;
    wrongLetters.innerHTML = incorrects;
    typingInput.value =""
    if(corrects.length === word.length){
        alert(`Congrats, You've found the word ${word}`)
        randomWord() // so the game reset

    }
    else if(maxGuesses < 1){
        alert("Game over! You don't have remaining guess")
        for(let i = 0; i < word.length; i++){
           
                inputs.querySelectorAll('input')[i].value = word[i];
            }
    }

}
randomWord()
resetBtn.addEventListener('click', randomWord)
document.addEventListener('input', initGame)
document.addEventListener('keydown', ()=> typingInput.focus())
inputs.addEventListener('click', ()=> typingInput.focus())