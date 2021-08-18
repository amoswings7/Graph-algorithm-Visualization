

const canvas = document.getElementById('canvas');
const canvasArea = document.getElementById('.canvas-area');
const parent = document.querySelector('.left-panel');
const searchBtn = document.querySelector('#searchMethod');
const discoveredElement = document.querySelector('.status #discovered span');
const countElement = document.querySelector('.status #count span');
const ctx = canvas.getContext('2d')


//buttons on control panel
const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')
const stopBtn = document.getElementById('stop')


canvas.width=window.innerWidth-30
canvas.height=window.innerHeight-50
const canvasDistance = canvas.getBoundingClientRect()


let grid = []
let gridLengthSquared = 15
const cellObject = {
    nextX:0,
    nextY:0,
    width:Math.floor(canvas.width/gridLengthSquared),
    height:Math.floor(canvas.height/gridLengthSquared)
}
const mousePosition ={
    x:0,
    y:0
}
const inputObject = {
    target:null,
    startPosition:[7,7],
    paused:false
}


function init(){
    for(let i=0;i<gridLengthSquared;i++){
        const newRow=[]
        for(let j=0;j<gridLengthSquared;j++){
            newRow.push(new Cell())
            cellObject.nextX+=cellObject.width
        }
        grid[i]=newRow
        cellObject.nextY+=cellObject.height
        cellObject.nextX=0
    }
}

function animate(){
    if(inputObject.paused) return 
    for(let row of grid){
        for(let col of row){
            col.update()
            col.draw()
        }
    }
    
    requestAnimationFrame(animate)
}
init()
animate()

//breadthFirstSearch(7,7,30,grid)



// const p$ = new MutationObserver((mutationList, observer) => {
//     for (mutation of mutationList) {
//       console.log(mutation.target.clientWidth);
//     }
//   });
//   p$.observe(parent, {
//     attributes: true,
//     childList: false,
//     subtree: false
//   });