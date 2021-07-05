 let btn = document.querySelector("button")
 let para= document.querySelector(".para");
 let body=document.querySelector("body")


 let generateColore= ()=>{
     let myNum="";
    for(let a=1; a<=6;a++){
        let num= Math.floor(Math.random()*10) 
        num=num.toString()
        myNum=myNum+num
        let result="#"+myNum
        para.innerHTML=result
        body.style.backgroundColor=result;

    }
}

 btn.onclick=generateColore;


 