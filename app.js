let addtodolist = document.getElementById('addtodo');
let inputfield = document.getElementById('inputfield');
let todocontainer= document.getElementById('todocontainer');

addtodolist.addEventListener("click" , function(){
var paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling' );
paragraph.innerText = inputfield.value;
todocontainer.appendChild(paragraph);
inputfield.value = "";
paragraph.addEventListener('click', function(){
paragraph.style.textDecoration= 'line-through';
})
paragraph.addEventListener('dblclick', function(){
    todocontainer.removeChild(paragraph);
})
})
