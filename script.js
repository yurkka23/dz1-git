const btnColor = document.querySelector('#btn-color');
const text = document.querySelector('.text');

btnColor.addEventListener('click', ()=>{
    if(text.classList.contains("color")){
        text.classList.remove("color");
    }else{
        text.classList.add("color");
    } 
})