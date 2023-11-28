let title=document.querySelector('.title')
let turn='x';
let squares=[]
let gm=document.getElementById('Gamee');



function game(id){
    let ele=document.getElementById(id);
    if(turn==='x' && ele.innerHTML==''){
        
        ele.innerHTML='X'
        turn='o'
        title.innerHTML="O"
    }
    else if(turn==='o' && ele.innerHTML=='')
    {
        ele.innerHTML='O'
        turn='x'
        title.innerHTML="X"
    } 
    win();   
}
//winner

function win(){
    for(let i=1;i<10;++i){
       squares[i]= document.getElementById('item'+i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2]==squares[3] && squares[1]!='')
    {
        end(1,2,3)    }
    else if(squares[4] == squares[5] && squares[5]==squares[6] && squares[4]!='')
    {
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8]==squares[9] && squares[7]!='')
    {
        end(7,8,9)
    }
    else if(squares[1] == squares[4] && squares[4]==squares[7] && squares[1]!='')
    {
        end(1,4,7)
    }
    else if(squares[2] == squares[5] && squares[5]==squares[8] && squares[2]!='')
    {
        end(2,5,8)
    }
    else if(squares[3] == squares[6] && squares[6]==squares[9] && squares[3]!='')
    {
        end(3,6,9)
    }
    else if(squares[1] == squares[5] && squares[5]==squares[9] && squares[1]!='')
    {
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5]==squares[7] && squares[3]!='')
    {
        end(3,5,7)
    }
    //Darw
    else if(squares[1]!='' &&squares[2]!='' &&squares[3]!=''
    &&squares[4]!=''
    &&squares[5]!=''
    &&squares[6]!=''
    &&squares[7]!=''
    &&squares[8]!=''
    &&squares[9]!=''
    ){
        title.innerHTML=`Draw`;
        // setInterval(function(){title.innerHTML +='.'},1000);
        // setTimeout(function(){location.reload()},4000)
        setTimeout(function(){ for(let i=1;i<10;++i){
            squares[i]= document.getElementById('item'+i).innerHTML='';
            document.getElementById('item'+i).style.backgroundColor="rgba(192, 27, 43, 0.779)";
            title.innerHTML ="X O Game"
         }},1000)

    }
   
}



function end(num1,num2,num3){
    
    title.innerHTML=`${squares[num1]} is winner`

    if(squares[num1]=="X"){
        
        x.innerHTML= +x.innerHTML + 1

        let winx=document.getElementById('winx')
        let wino=document.getElementById('wino')


        if(x.innerHTML == 3){
           
            gm.style.display='none';
            winx.style.display="block";
            setTimeout(function(){location.reload()},4000);
            setInterval(function(){winx.innerHTML +='.'},1000);

        }
       
        
        
       // setInterval(function(){winx.innerHTML +='.'},1000);

    }
    else{
        o.innerHTML= + o.innerHTML + 1
        if(o.innerHTML == 3){
                
            gm.style.display='none';
            wino.style.display="block";
            setTimeout(function(){location.reload()},4000);
            setInterval(function(){wino.innerHTML +='.'},1000);

        }
        
    }

    document.getElementById('item'+num1).style.backgroundColor="black";
    document.getElementById('item'+num2).style.backgroundColor="black";
    document.getElementById('item'+num3).style.backgroundColor="black";
   
    //setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){ for(let i=1;i<10;++i){
        squares[i]= document.getElementById('item'+i).innerHTML='';
        document.getElementById('item'+i).style.backgroundColor="rgba(192, 27, 43, 0.779)";
        title.innerHTML ="X O Game"
     }},1000)
  
    // for(let i=1;i<10;++i){
    //     squares[i]= document.getElementById('item'+i).innerHTML='';
    //     document.getElementById('item'+i).style.backgroundColor="rgba(192, 27, 43, 0.779)";
    //  }
     
}

let x =document.querySelector('.scorex span')
let o =document.querySelector('.scoreo span')

