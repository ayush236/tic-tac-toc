let boxes = document.querySelectorAll(".box");
let playagain = document.getElementById("again");
let end =document.getElementById("end");
let op = document.getElementById("option")

let turn0 = true; // player turn0 or turnx

const winning= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was  clicked");
        if(turn0 === true){
           box.innerText="O"
           turn0=false
        }else{
            box.innerText="X"
            turn0=true
        }

        box.disabled=true;
        checkwinner();
    });
});

const checkwinner = ()=>{
    for (let pattern of winning){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(pattern)
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        // if(boxes[pattern[0]].innerText &&
        //     boxes[pattern[1]].innerText === boxes[pattern[0]].innerText && 
        //     boxes[pattern[2]].innerText === boxes[pattern[1]].innerText){
        //         console.log("is winner")
        //     }else{
        //         console.log("draw")
        //     }

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText; 
        if ( pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner is", pos1val)
                showingwinner(pos1val);
                disabledbox();
                return;
                
            }
        }

    }

}

const showingwinner = (winner)=>{
    op.innerText=`winner is ${winner}`;
    
    
};

const disabledbox =() =>{
    boxes.forEach((box)=>{box.disabled=true} );
};

playagain.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        let count =0;
        count+=1;
        box.innerText=""; 
    box.disabled=false;
});
op.innerText="";
turn0 = true;

});

