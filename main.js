const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const BLOCK_SIZE = 20
const BOARD_WIDTH = 60
const BOARD_HEIGHT = 25

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

ctx.scale(BLOCK_SIZE,BLOCK_SIZE)

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const pallet = {
    position: {x: 2, y: 9},
    shape: [
        [1],
        [1],
        [1],
        [1],
        [1],
    ]
}

const enemyPallet = {
    position: {x: BOARD_WIDTH - 3, y: 9},
    shape: [
        [3],
        [3],
        [3],
        [3],
        [3],
    ]
}

const ball = {
    position: {
        x: Math.floor(BOARD_WIDTH/2),
        y: Math.floor(BOARD_HEIGHT/2 - 1)
    },
    shape: [[2]],
    dir: ["l", "u"]
}

let score = 0
let enemyScore = 0

let moveCounter = 0
let milisToMove = 100
let lastTime = 0
function update(time = 0){
    const deltaTime = time - lastTime
    lastTime = time

    moveCounter += deltaTime
    

    if(moveCounter > milisToMove){
        if(ball.dir[0] === "l"){
            ball.position.x--
            if(checkBallCollision()){
                console.log("choque")
                ball.position.x++
                enemyScore++
                ball.position.x = Math.floor(BOARD_WIDTH/2)
                ball.position.y = Math.floor(BOARD_HEIGHT/2 - 1)
                milisToMove = 100
            }
            if(checkBallPalletCollision()){
                ball.position.x++
                ball.dir[0] = "d"
                milisToMove -= 5
                console.log(milisToMove)
            }
            
        }
        if(ball.dir[0] === "d"){
            ball.position.x++
            if(checkBallCollision()){
                console.log("choque")
                ball.position.x--
                score++
                ball.position.x = Math.floor(BOARD_WIDTH/2)
                ball.position.y = Math.floor(BOARD_HEIGHT/2 - 1)
                ball.dir[0] = "l"
                milisToMove = 100
            }
            if(checkBallEnemyPalletCollision()){
                ball.position.x--
                ball.dir[0] = "l"
                milisToMove -= 5
                console.log(milisToMove)
            }
        }
        if(ball.dir[1] === "u"){
            ball.position.y--
            if(checkBallCollision()){
                ball.position.y++
                ball.dir[1] = "d"
            }
            /*if(checkBallEnemyPalletCollision()){
                ball.position.x--
                ball.dir[0] = "l"
            }*/
            let moves = Math.random()
            if(moves > 0.21){
                enemyPallet.position.y--
                if(checkEnemyCollision()){
                    enemyPallet.position.y++
                }
            }
        }
        if(ball.dir[1] === "d"){
            ball.position.y++
            if(checkBallCollision()){
                ball.position.y--
                ball.dir[1] = "u"
            }
            /*if(checkBallEnemyPalletCollision()){
                ball.position.x--
                ball.dir[0] = "l"
            }*/
            let moves = Math.random()
            if(moves > 0.21){
                enemyPallet.position.y++
                if(checkEnemyCollision()){
                    enemyPallet.position.y--
                }
            }
            
        }
        
        moveCounter = 0
    }

    draw()
    window.requestAnimationFrame(update)
}

function draw(){
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = "6px Arial";
    ctx.fillStyle = "#FFF"
    ctx.fillText(score, 15, 6);
    ctx.fillText(enemyScore, BOARD_WIDTH - 16, 6);
    
    
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value === 1){
                ctx.fillStyle = "#F00"
                ctx.fillRect(x, y, 1, 1)
            }
            if(value === 2){
                ctx.fillStyle = "#0F0"
                ctx.fillRect(x, y, 1, 1)
            }
        })
    })
    pallet.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value){
                ctx.fillStyle = "#FFF"
                ctx.fillRect(x + pallet.position.x, y + pallet.position.y, 1, 1)
            }
        })
    })

    enemyPallet.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value){
                ctx.fillStyle = "#FFF"
                ctx.fillRect(x + enemyPallet.position.x, y + enemyPallet.position.y, 1, 1)
            }
        })
    })

    ball.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value){
                ctx.fillStyle = "#0F0"
                ctx.fillRect(x + ball.position.x, y + ball.position.y, 1, 1)
            }
        })
    })
    
}

document.addEventListener("keydown", event => {

    if(event.key === "ArrowUp") {
        pallet.position.y--
        if(checkCollision()){
            pallet.position.y++
        }
    }
    if(event.key === "ArrowDown") {
        pallet.position.y++
        if(checkCollision()){
            pallet.position.y--
        }
    }
})

function checkCollision(){
    return pallet.shape.find((row, y) => {
        return row.find((value, x) => {
            return (
                value !== 0 && board[y + pallet.position.y]?.[x + pallet.position.x] !== 0
            )
        })
    })
}

function checkEnemyCollision(){
    return enemyPallet.shape.find((row, y) => {
        return row.find((value, x) => {
            return (
                value !== 0 && board[y + enemyPallet.position.y]?.[x + enemyPallet.position.x] !== 0
            )
        })
    })
}

function checkBallCollision(){
    return ball.shape.find((row, y) => {
        return row.find((value, x) => {
            return (
                value !== 0 && board[y + ball.position.y]?.[x + ball.position.x] !== 0
            )
        })
    })
}

function checkBallPalletCollision(){
    return pallet.shape.find((row, y) => {
        return row.find((value, x) => {
            return (2 === ball.position.x && pallet.position.y + y === ball.position.y)
        })
    })
}

function checkBallEnemyPalletCollision(){
    return enemyPallet.shape.find((row, y) => {
        return row.find((value, x) => {
            return (enemyPallet.position.x + x === ball.position.x && enemyPallet.position.y + y === ball.position.y)
        })
    })
}

update()