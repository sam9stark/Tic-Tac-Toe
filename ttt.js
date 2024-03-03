let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newgame");
let message=document.querySelector(".msg")

let turnO=true;


let winnerChance=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>
{
    turnO=true;
    enableBoxes();
    message.classList.add("hide");
}


box.forEach((box) => {
    box.addEventListener(("click"),()=>{
       if(turnO)
       {
        box.innerText="O";
        turnO=false;
       } 
       else{
        box.innerText="X";
        turnO=true;
       }

       box.disabled=true;

        checkWinner();

    });
});

const disabledBoxes=()=>
{
    for(let b of box)
    {
        b.disabled=true;
       
    }
}

const enableBoxes= () =>
{
    for(let b of box)
    {
        b.disabled=false;
        b.innerText="";
    }
}

const showWinner = (winner) => {
    message.innerText=`Congratulation !!! Winner is ${winner}`;
    message.classList.remove("hide");
    newgame.classList.remove("hide");
    disabledBoxes();
}


let checkWinner=()=>{
for(let chance of winnerChance)
{
        let ps1=box[chance[0]].innerText;
        let ps2=box[chance[1]].innerText;
        let ps3=box[chance[2]].innerText;

        if(ps1!="" && ps2 !="" && ps3 != "")
        {
            if(ps1 === ps2 && ps2 === ps3)
            {
                showWinner(ps1);
            }
        } 
        
}

}

reset.addEventListener(("click"), resetGame);
newgame.addEventListener(("click"), resetGame);