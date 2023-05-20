let inputDir ={x:0,y:0};
let speed=5;
let LastPaintTime=0;
let score=0;
let score1=0;
let score2=0;
let p=0;
let q=0;
let r=0;

let snakeArr = [{x:10,y:10}];
food ={x:9,y:9};
food1={x:7,y:11};
food2={x:3,y:15};




let foodArr=[food,food1,food2];
//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime-LastPaintTime)/1000 <1/speed)
    {
        return;
    }
    LastPaintTime=ctime;
    gameEngine();

}
function isCollide(snake) {
    //if u bump into urself
    for( let i=1;i<snakeArr.length; i++){
        if(snake[i].x=== snake[0].x && snake[i].y=== snake[0].y  ){
            return true;
        }
    }
        // if u bump into wall
        if ((snake[0].x >=20 || snake[0].x<=0) || (snake[0].y >=20|| snake[0].y<=0 ))
        {
            return true;
        }
    
    
}

function gameEngine()
{
    //updating snake array ( coontains location of snake)
    if(isCollide(snakeArr)){
        inputDir ={x:0,y:0}
        alert("game over.press any to play again");
        snakeArr=[{x:10,y:10}];
        score=0;
    }
    // if the snake has eaten the food then we have to inc score and get more food in board
} 

    

    
    if((snakeArr[0].y===food.y && snakeArr[0].x===food.x ))
    {
        score+=1;
        p=p+1;
        if (score>hiscoreval){
            hiscoreval =score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            hiscoreBox.innerHTML ="HiScore:" + hiscoreval;
        }
        scoreBox.innerHTML= "Score:"+ score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
        let a = 8;
        let b = 10;
        food = {x: Math.round(a+ (b-a)*Math.random()),y:Math.round(a+ (b-a)*Math.random())}
    
    }

    
    

    
    if ((snakeArr[0].y=== food1.y && snakeArr[0].x===food1.x))
    {
       
        q=q+1;
        score=score+1;
        if (score>hiscoreval){
            hiscoreval =score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            hiscoreBox.innerHTML ="HiScore:" + hiscoreval;
        }
        scoreBox.innerHTML= "Score:"+ score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
        let a = 5;
        let b = 15;
        food1 = {x: Math.round(a+ (b-a)*Math.random()),y:Math.round(a+ (b-a)*Math.random())}
     
    }

    
    
    {
    if((snakeArr[0].y=== food2.y && snakeArr[0].x===food2.x ))
    {
        score+=1;
        
        if (score>hiscoreval){
            hiscoreval =score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            hiscoreBox.innerHTML ="HiScore:" + hiscoreval;
        }
        scoreBox.innerHTML= "Score:"+ score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
        let a = 6;
        let b = 14;
        food2 = {x: Math.round(a+ (b-a)*Math.random()),y:Math.round(a+ (b-a)*Math.random())}
        
    }
    

    
    
    

    
    //moving the snake
    for(let i= snakeArr.length-2;i>=0;i--){
       
        snakeArr[i+1]= {...snakeArr[i]};
    }

    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;

        //display snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
       snakeElement = document.createElement('div');
       snakeElement.style.gridRowStart = e.y;
       snakeElement.style.gridColumnStart= e.x;
      
       if (index===0)
       {
        snakeElement.classList.add('head');
       }
       else{
        snakeElement.classList.add('snake');
       }
       board.appendChild(snakeElement);

    });
    //display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
    
    food1Element = document.createElement('div');
    food1Element.style.gridRowStart = food1.y;
    food1Element.style.gridColumnStart=food1.x;
    food1Element.classList.add('food1')
    board.appendChild(food1Element);

    food2Element = document.createElement('div');
    food2Element.style.gridRowStart = food2.y;
    food2Element.style.gridColumnStart=food2.x;
    food2Element.classList.add('food2')
    board.appendChild(food2Element);

}




// main logic starts here
let hiscore = localStorage.getItem("hiscore");
if ( hiscore=== null)
{
    
    hiscoreval=0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval= JSON.parse(hiscore);
    hiscoreBox.innerHTML ="HiScore:" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0,y:1}//start game
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break; 
    }
});


