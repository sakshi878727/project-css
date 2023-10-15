btn=document.querySelector("button");
ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
    inp=document.querySelector("input");
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
delbtn.innerText="delete";
delbtn.classList.add("delete");
item.appendChild(delbtn);
    inp.value="";            
    }
);

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});
