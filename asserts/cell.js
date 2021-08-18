
class Cell {
    constructor(){
        this.width=cellObject.width;
        this.height=cellObject.height;
        this.x=cellObject.nextX;
        this.y=cellObject.nextY;
        this.color='rgb(20,20,20)';
        this.strokeColor='#AD900E';
        this.textColor='white';
        this.wasVisted= 0;
        this.value = Math.floor(Math.random()*100)
    }
    update(){
        if(
            mousePosition.x > this.x && mousePosition.x < this.x+this.width &&
            mousePosition.y > this.y && mousePosition.y < this.y+this.height
        ){
            if(!inputObject.target){
                inputObject.target=this.value
                this.color='blue'
            }
        }
    }
    checkIfVisted(){
        if(this.wasVisted===1){
            discoveredElement.textContent=parseInt(discoveredElement.textContent)+1
        }
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.lineWidth=3
        ctx.strokeStyle=this.strokeColor
        ctx.strokeRect(this.x,this.y,this.width,this.height)
        ctx.fillStyle=this.textColor
        ctx.font='15px arial'
        ctx.fillText(this.value,this.x+20,this.y+20)
    }
}
