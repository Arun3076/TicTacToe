let boxes=document.querySelectorAll(".box");
let reser=document.querySelector(".reset");
let winMsg=document.querySelector(".msg");
let winBox=document.querySelector(".winBox");
let newGameBtn=document.querySelector(".newGame");
let turn=document.querySelector(".turn");
let turnO=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.style.color="#05e0fc";
        box.innerText="O";
        turn.innerText="Player 'X' Turn";
        turnO=false;
    }else{
        box.style.color="#fc05e8";
        box.innerText="X";
        turn.innerText="Player 'O' Turn";
        turnO=true;
    }
    box.disabled=true;
    count++;
    checkWinner();
    });
});


const reload=()=>{
    turnO=true;
    count=0;
    turn.innerText="Player 'O' Turn";
    winBox.classList.add("winBox");
    boxEnable();
};


const boxDisable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const boxEnable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
    turn.innerText="";
    winMsg.innerText=`Congratulations, Winner is ${Winner}.`;
    winBox.classList.remove("winBox");
    boxDisable();

}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }else if(count===9){
                turn.innerText="";
                winMsg.innerText=`It's a DRAW`;
                winBox.classList.remove("winBox");
                boxDisable();
            }
        }
       
    }
}

newGameBtn.addEventListener("click",reload);
reser.addEventListener("click",reload);