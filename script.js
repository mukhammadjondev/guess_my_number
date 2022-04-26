const again = document.querySelector('.again') 
const number = document.querySelector('.number') 
const guess = document.querySelector('.guess')
const check = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')

// game values
let gameScore = 20
let gameHighscore = 0
let gameOver = false

// randomNumber
function randomNumberFunc() {
    const randomNumber = Math.floor(Math.random() * 20) + 1
    console.log('COM NUMBER:', randomNumber)
    return randomNumber
}
let randomNumber = randomNumberFunc()

check.addEventListener('click', ()=> {
    const myNumber = +guess.value

    if(!gameOver) {
        if(!myNumber) {
            message.textContent = "Type any number..."
        } else {
            if(randomNumber == myNumber) {
                number.textContent = myNumber
                message.textContent = 'You are win...🏆'
                document.body.style.background = '#60b347'
                if (gameHighscore < gameScore) {
                    gameHighscore = gameScore
                    highscore.textContent = gameHighscore
                }
            } else if(myNumber > randomNumber) {
                if(!gameOver) {
                    gameScore--
                    score.textContent = gameScore
                    message.textContent = 'Too Height ↗'
                    if(gameScore == 0) {
                        gameOver = true
                        message.textContent = 'Game over...'
                    }
                }
            } else if(myNumber < randomNumber) {
                if(!gameOver) {
                    gameScore--
                    score.textContent = gameScore
                    message.textContent = 'Too Low ↘'
                    if(gameScore == 0) {
                        gameOver = true
                        message.textContent = 'Game over...'
                    }
                }
            }
        }
    }
})

again.addEventListener('click', ()=> {
    number.textContent = '?'
    message.textContent = 'Start guessing...'
    gameScore = 20
    score.textContent = 20
    document.body.style.background = '#222'
    guess.value = ''
    gameOver = false
    randomNumber = randomNumberFunc()
})