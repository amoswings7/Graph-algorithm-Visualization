
//recursive depthfirstSearch algorithm
async function depthFirstSearch(grid,target,r,c,memory={}){
    if(inputObject.paused)return false
    const rowBoundary= r>=0 && r<grid.length
    const colBoundary= c>=0 && c<grid.length
    if(!rowBoundary || !colBoundary) return false
    const pos = r+','+c
    if(pos in memory) return false
    if(grid[r][c].value===target){
        grid[r][c].color='purple'
        grid[r][c].wasVisted+=1
        grid[r][c].checkIfVisted()
        return true
    }
    grid[r][c].wasVisted=true
    memory[pos]=true
    grid[r][c].color='#DE43FF'
    grid[r][c].textColor='#000'
    countElement.innerHTML=parseInt(countElement.innerHTML)+1
    await sleep()
    grid[r][c].color='#4747FF'
    grid[r][c].textColor='white'

    const left = await depthFirstSearch(grid,target,r,c-1,memory)
    const top = await depthFirstSearch(grid,target,r-1,c,memory)
    const right = await depthFirstSearch(grid,target,r,c+1,memory)
    const bottom = await depthFirstSearch(grid,target,r+1,c,memory)

    if(left || top || right || bottom){
        grid[r][c].color='#D9B827'
        grid[r][c].textColor='black'
        return true
    }
    return
}

//my sleep function that slows down the execution of the search algrorithm by 2s
function sleep(duration=2){
    return new Promise((resolve)=>setTimeout(()=>resolve('amos'),duration))
}

//my breath first search algrorithm
async function breadthFirstSearch(r,c,target,grid){
    const queue = [[r,c]];
    const memory = {}
    while(queue.length > 0){
        if(inputObject.paused)return false
        const [row,col] = queue.shift()
        const pos = row+','+col;
        if(pos in memory) continue
        memory[pos] =true
        if(
            row>=0 && row<grid.length &&
            col>=0 && col<grid.length 
        ){
            grid[row][col].color='#DE43FF'
            grid[row][col].textColor='#000'
            countElement.innerHTML=parseInt(countElement.innerHTML)+1
            await sleep(0)
            if(grid[row][col].value === target ){
                grid[row][col].color='purple'
                grid[row][col].wasVisted+=1
                grid[row][col].checkIfVisted()
                continue
            }
            grid[row][col].color='#D9B827'
            grid[row][col].textColor='#000'
            await sleep(2)
            grid[r][c].color='#4747FF'
            grid[r][c].textColor='white'
        }else{
            continue
        }
        queue.push([row,col-1])
        queue.push([row-1,col])
        queue.push([row,col+1])
        queue.push([row+1,col])
    }
}