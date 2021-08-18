resetBtn.addEventListener('click',()=>{
    discoveredElement.textContent=0
    countElement.textContent=0
    mousePosition.x=0
    mousePosition.y=0
    inputObject.target=null
    grid=[]
    cellObject.nextX=0
    cellObject.nextY=0
    inputObject.paused=true
    init()
    inputObject.paused=false
    animate()
})
stopBtn.addEventListener('click',(e)=>{
    mousePosition.x=0
    mousePosition.y=0
    inputObject.paused=true
})
startBtn.addEventListener('click',(e)=>{
    discoveredElement.textContent=0
    countElement.textContent=0
    if(!inputObject.target) return alert('Please select your target by clicking on any one number you want to look for')
    if(inputObject.paused) return 
    const startX=Math.floor(Math.random()*gridLengthSquared)
    const startY=Math.floor(Math.random()*gridLengthSquared)
    grid[startX][startY].color='green'
    if(searchBtn.value==='bfs') return breadthFirstSearch(startX,startY,inputObject.target,grid)
    if(searchBtn.value==='dfs') return depthFirstSearch(grid,inputObject.target,startX,startY)
})

canvas.addEventListener('click',(e)=>{
    mousePosition.x=e.x-canvasDistance.x
    mousePosition.y=e.y-canvasDistance.y
})

window.addEventListener('resize',(e)=>{
    canvas.width=window.innerWidth-30
    canvas.height=window.innerHeight-50
    mousePosition.x=0
    mousePosition.y=0
    inputObject.target=null
    grid=[]
    cellObject.nextX=0
    cellObject.nextY=0
    cellObject.width=Math.floor(canvas.width/gridLengthSquared)
    cellObject.height=Math.floor(canvas.height/gridLengthSquared)
    inputObject.paused=true
    init()
    inputObject.paused=false
    animate()
})