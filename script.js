let input = document.getElementById("input");
let btn = document.getElementById("btn");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("You must write something....");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }

    input.value = "";
    storeData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        storeData();
    }
},false);

function storeData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showStoreData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showStoreData();