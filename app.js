let ul=document.querySelector("ul");
let btn=document.querySelector("button");
btn.addEventListener("click" ,function(){
let item=document.createElement('li');
let input=document.querySelector("input");
item.innerText=input.value;

let delbtn=document.createElement("button");
delbtn.innerText="delete";
delbtn.classList.add("del");
item.appendChild(delbtn);
ul.appendChild(item);
input.value="";


});
// let delbtns=document.querySelectorAll('.del');
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }
ul.addEventListener("click",function(){
   if(event.target.nodeName=="BUTTON")
   {
    let listitem=event.target.parentElement;
   listitem.remove();
   
    console.log("deleted");

   }
   
})