// 1
const countingP = document.querySelector('.counting')
const countingBtn = document.querySelector('.countingBtn')

countingBtn.addEventListener('click', () => {
    let count = 0
    const timer = setInterval(() => {
        count += 1
        console.log(count)
        countingP.textContent = count
        if(count === 5){
            clearInterval(timer)
        }
    }, 1000)
})
//2
const box = document.querySelector('.box')
const emoji = document.querySelector('.emoji')
const heart = document.querySelector('.heart')
const skateboard = document.querySelector('.skateboard')

let verticalPosition = 0
let direction = -10

const emojiIterval = setInterval(() => {
    if(verticalPosition === 0){
        direction = -10
    } 
    if(verticalPosition === -100){
        direction = 10
    }
    verticalPosition = verticalPosition + direction
    emoji.style.top = verticalPosition + 'px'
}, 100)

let heartScale = 1
let heartDirection = -0.2

const heartIterval = setInterval(() => {
    if(heartScale >= 1.5){
        heartDirection = -0.2
    }
    if(heartScale <= 1){
        heartDirection = 0.2
    }
    heartScale = heartScale + heartDirection
    heart.style.transform = `scale(${heartScale})`
}, 200)

let horizontallyPosition = 0
let hDirection = -10

const skateboardIterval = setInterval(() => {
    if(horizontallyPosition === 0){
        hDirection = -10
    }
    if(horizontallyPosition === -100){
        hDirection = 10
    }
    horizontallyPosition = horizontallyPosition + hDirection
    skateboard.style.left = horizontallyPosition + 'px'
}, 100)
// 3
let score = 0
let time = 30

const bestScore = document.querySelector('.bestScore')
const gameScore = document.querySelector('.score')
const gameTime = document.querySelector('.time')
const gameButton = document.querySelector('.gameButton')
const gameField = document.querySelector('.gameField')
const bullseye = document.querySelector('.bullseye')

updateBestScore();

function randomPosition(){
    return{
        top: Math.floor(Math.random() * 60 + 5),
        left: Math.floor(Math.random() * 80 + 10)
    }
}
function updateBestScore(){
    const savedScore = localStorage.getItem("bestScore") || 0;
    bestScore.textContent = 'Best score: ' + savedScore
}
function startTimer(){
    let timerId = setInterval(() => {
        time--;
        gameTime.textContent = 'Time: ' + time;
        if(time <= 0){
            clearInterval(timerId)
            endGame()
            gameTime.textContent = 'Time: 30'
        }
    }, 1000)
}

function starGame(){
    score = 0
    time = 30

    gameScore.textContent = 'Score: ' + score;
    gameTime.textContent = 'Time: ' + time

    gameButton.style.display = 'none'
    gameField.style.display = 'block'

    bullseyePosition();
    startTimer();
}

function bullseyePosition(){
    const position = randomPosition()
    bullseye.style.top = position.top + '%'
    bullseye.style.left = position.left + '%'
}

bullseye.addEventListener('click', () => {
    score++;
    gameScore.textContent = 'Score: ' + score

    const currentBest = localStorage.getItem("bestScore")
    if(score > currentBest){
        localStorage.setItem("bestScore", score)
        updateBestScore();
    }

    bullseyePosition();
})
function endGame(){
    gameField.style.display = 'none'
    gameButton.style.display = 'block'
    alert(`Гра закінченнв! Ваш результат: ${score}`)
}
gameButton.addEventListener('click', starGame)
//4
const timerInput = document.querySelector('.timerInput')
const timerBtn = document.querySelector('.timerBtn')

timerBtn.addEventListener("click", () => {
    const seconds = timerInput.value

    if(seconds > 0){
        alert(`Таймер запущено на ${seconds} секунд`)

        setTimeout(() => {
            alert('Час вийшов! Hello word!🌍🌎🌏🌌🪐')
        }, seconds * 1000)
    } else{
        alert('Будь ласка, введіть число більше за 0')
    }
})