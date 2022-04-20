
class Cobra{
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1

    }

    move(){
        var newRect;
        if(this.rotateX == 1)
        newRect = {
            x: this.tail[this.tail.length - 1].x + this.size,
            y: this.tail[this.tail.length - 1].y
        }
        else if(this.rotateX == 1)
        newRect = {
            x: this.tail[this.tail.length - 1].x - this.size,
            y: this.tail[this.tail.length - 1].y
         }
         else if(this.rotateY == 1)
         newRect = {
             x: this.tail[this.tail.length - 1].x
             ,y: this.tail[this.tail.length - 1].y + this.size,
         }
         else if(this.rotateY == -1)
         newRect = {
             x: this.tail[this.tail.length - 1].x
             ,y: this.tail[this.tail.length - 1].y + this.size,
         }

         this.tail.shift()
         this.tail.push(newRect)
     }
 } 

        class Apple{
            constructor(){
                var isTouching;
                while(true){
                    isTouching = false;
                    this.x = Math.floor(Math.random() * canvas.width / cobra.size) * cobra.size
                    this.y = Math.floor(Math.random() * canvas.height / cobra.size) * cobra.size
                    for(var i = 0; i < cobra.tail.lenght;i++){
                        if(this.x == cobra.tail[i].x && this.y == cobra.tail[i].y){
                            isTouching = true
                        }
                    }
                    if(!isTouching){
                        break;
                    }
                    this.color = "pink"
                    this.size = cobra.size
                }
            }
        }




var canvas = document.getElementById("canvas")

var cobra = new Cobra();

var apple = new Apple();

var canvasContext = canvas.getContext('2d');

window.onload = ()=>{
    gameLoop();
}

function gameLoop(){
    setInterval(show, 1000/15) 
}

function show(){
    update();
    draw();
}

function update(){
    cobra.move()
}

function draw(){
    createRect(0,0,canvas.width, canvas.height, "black")
    createRect(0,0,canvas.width, canvas.height)
    for(var i =0; i < cobra.tail.length; i++){
        createRect(cobra.tail[i].x + 2.5, cobra.tail[i].y + 2.5, cobra.size - 5, snake.size- 5, 'white')
    }

    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: ", (snake.tail.lenght +1),
        canvas.width -120, 18);
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(x,y,width, height,color){
    canvasContext.fillStyle = color
    canvasContext.fillRect(x,y,width,height)
}

window.addEventListener("keydown", (event)=>{
    setTimeout(()=>{
        if(event.keyCode == 37 && cobra.rotateX != 1){
            cobra.rotateX = 1
            cobra.rotateY = 0;
        } else  if(event.keyCode == 38 && cobra.rotateY != 1){
            cobra.rotateX = 0
            cobra.rotateY = -1;
        } else  if(event.keyCode == 39 && cobra.rotateX != -1){
            cobra.rotateX = 1
            cobra.rotateY = 0;
        }else  if(event.keyCode == 40 && cobra.rotateX != -1){
            cobra.rotateX = 0
            cobra.rotateY = 1;
        }
    }, 1)
})

