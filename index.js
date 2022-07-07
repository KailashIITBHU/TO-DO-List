function addtolist(){
    var taskname=document.getElementById('taskname').value;
    var tododiv=document.getElementById('mytodo')
    var newtodoitem=document.createElement('div')
    var todoname=document.createElement('li')
    todoname.innerHTML=taskname
    var deletbtn=document.createElement('i')
    deletbtn.classList.add('far')
    deletbtn.classList.add('fa-trash-alt')
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletbtn)
    tododiv.appendChild(newtodoitem)
}
var tododiv=document.getElementById('mytodo')
tododiv.addEventListener('click',deleteitm)

function deleteitm(){
    alert('Deleted function executed')
}
function deleteitm(e){
    const element=e.target
    if(element.classList[0]=='far'){
        element.parentElement.remove()
    }
}
