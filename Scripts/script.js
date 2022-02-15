// ********** //
// GAME STATES
// ********** //




// ********** //
// GRID & STARTUP 
// ********** //

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1     
]

const grid = []

const gameGrid = document.querySelector(".grid")
const gameGridWidth = 28; 

function createGrid() {
    for (let i=0; i < layout.length; i++) {
        // create tiles and push to grid
        const tile = document.createElement("div")
        grid.push(tile)
        gameGrid.appendChild(tile)

        // add styling to tile
        if (layout[i] === 0) {
            grid[i].classList.add("pac-dot")
        } else if (layout[i] === 1) {
            grid[i].classList.add("wall")
        } else if (layout[i] === 2) {
            grid[i].classList.add("ghost-lair")
        } else if (layout[i] === 3) {
            grid[i].classList.add("power-pellet")
        } else if (layout[i] === 4) {
            grid[i].classList.add("empty")
        }
    }
}

let pacmanCurrentIndex = 490;

function pacmanStart() {
    grid[pacmanCurrentIndex].classList.remove("pac-dot,power-pellet")
    grid[pacmanCurrentIndex].classList.add("pacman")
}

createGrid()
pacmanStart()








// ********** //
// MOVEMENT  
// ********** //

function movePacman(direction) {
    grid[pacmanCurrentIndex].classList.remove("pacman")
    pacmanCurrentIndex += direction;
    grid[pacmanCurrentIndex].classList.add("pacman")

    // If move over a pac-dot, remove pac-dot and add to score
    if (grid[pacmanCurrentIndex].classList.contains("pac-dot")) {
        pacDotEaten()
    }

    // If move over a power-pellet, remove power-pellet and add to score
    if (grid[pacmanCurrentIndex].classList.contains("power-pellet")) {
        powerPelletEaten()
    }
}

document.addEventListener("keyup", control)
function control(e) {

    switch (event.key) {
        // case DIRECTION
        // if (projected tile is not a wall
        // && projected tile is not a ghost lair
        // && not on edge of grid) {
        // // movePacman function
        // }

        case "Down" :
        case "ArrowDown" : 
            console.log("down arrow pressed");
            if (
                !grid[pacmanCurrentIndex + gameGridWidth].classList.contains("wall") 
                && !grid[pacmanCurrentIndex + gameGridWidth].classList.contains("ghost-lair") 
                && pacmanCurrentIndex <= grid.length - gameGridWidth
                ) {
                    movePacman(gameGridWidth)
                }
            
            break;
        
        case "Up" :
        case "ArrowUp" : 
            console.log("up arrow pressed")            
            if (
                !grid[pacmanCurrentIndex - gameGridWidth].classList.contains("wall") 
                && !grid[pacmanCurrentIndex - gameGridWidth].classList.contains("ghost-lair") 
                && pacmanCurrentIndex > gameGridWidth - 1) {
                    movePacman(-gameGridWidth)
                }
            break;
        
        case "Left" :
        case "ArrowLeft" : 
            console.log("left arrow pressed");
            // if using an edge of map shortcut
            if (!grid[(pacmanCurrentIndex) -1 +gameGridWidth].classList.contains("wall") 
                && !grid[(pacmanCurrentIndex) -1 +gameGridWidth].classList.contains("ghost-lair")
                && pacmanCurrentIndex % gameGridWidth == 0) {
                    movePacman(-1 +gameGridWidth)
                    console.log(pacmanCurrentIndex)
                    break;
            }

            if (
                !grid[pacmanCurrentIndex - 1].classList.contains("wall") 
                && !grid[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
                && pacmanCurrentIndex % gameGridWidth !== 0) {
                    movePacman(-1)
                    console.log(pacmanCurrentIndex)
                }
            break;
        
        
        case "Right" :
        case "ArrowRight" :
            console.log("right arrow pressed")
            // if using an edge of map shortcut
            if (!grid[(pacmanCurrentIndex + 1 -gameGridWidth)].classList.contains("wall")
            && (pacmanCurrentIndex + 1)  % gameGridWidth == 0) {
                movePacman(-gameGridWidth+1)
                console.log(pacmanCurrentIndex)
                break;
            }
            
            if (
                !grid[pacmanCurrentIndex +1].classList.contains("wall") 
                && !grid[pacmanCurrentIndex +1].classList.contains("ghost-lair") 
                && (pacmanCurrentIndex + 1)  % gameGridWidth !== 0) {
                    movePacman(1)
                    console.log(pacmanCurrentIndex)
                }

            break;
        
        default:
            return
        }
}

console.log(grid.length - gameGridWidth)

// ********** //
// GHOSTS     
// ********** //

// construct ghost items
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
    }
}

// ghost array
const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("inky", 376, 400),
    new Ghost("pinky", 351, 300),
    new Ghost("clyde", 379, 500)
];

// all ghosts array for styling
const ghostsAll = document.getElementsByClassName("ghost")

// draw ghosts onto grid
ghosts.forEach(ghost => {
    grid[ghost.currentIndex].classList.add(ghost.className)
    grid[ghost.currentIndex].classList.add("ghost")
})

// move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    //                  L   R   U               D
    const directions = [-1, +1, -gameGridWidth, +gameGridWidth]
    
    
    ghost.timerId = setInterval(function() {
        let direction =  directions[Math.floor(Math.random() * directions.length)]
        if (
            !grid[ghost.currentIndex + direction].classList.contains("ghost")
            && !grid[ghost.currentIndex + direction].classList.contains("wall")
            ) {
                if (grid[ghost.currentIndex].classList.contains("scared")) {
                    grid[ghost.currentIndex].classList.remove("scared")
                    grid[ghost.currentIndex].classList.remove(ghost.className);
                    grid[ghost.currentIndex].classList.remove("ghost")
                    ghost.currentIndex += direction;
                    grid[ghost.currentIndex].classList.add(ghost.className)
                    grid[ghost.currentIndex].classList.add("ghost")
                    grid[ghost.currentIndex].classList.add("scared")

                }
                grid[ghost.currentIndex].classList.remove(ghost.className);
                grid[ghost.currentIndex].classList.remove("ghost")
                ghost.currentIndex += direction;
                grid[ghost.currentIndex].classList.add(ghost.className)
                grid[ghost.currentIndex].classList.add("ghost")
            } else direction = Math.floor(directions.length*Math.random())
    }, ghost.speed)
}


function moveGhostClasses() {

}

// ********** //
// SCORES & POWERUPS 
// ********** //

let score = 0;
const scoreDisplay = document.querySelector("#score")
scoreDisplay.innerHTML = score;

function addScore(num) {
    score += num;
    scoreDisplay.innerHTML = score;
}

function pacDotEaten() {
    addScore(1)
    grid[pacmanCurrentIndex].classList.remove("pac-dot")
}

function powerPelletEaten() {
    console.log("power")
    addScore(10)
    grid[pacmanCurrentIndex].classList.remove("power-pellet")
    scareGhosts(10)
}

function scareGhosts(seconds) {
    
    for (let i=0; i<ghostsAll.length; i++) {
        grid[ghosts[i].currentIndex].classList.add("scared")
    }
    setTimeout(revertGhosts, seconds * 1000)
}

function revertGhosts() {
    console.log("revert")
    
}