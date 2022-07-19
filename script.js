const btnColor = document.querySelector('#btn-color');
const text = document.querySelector('.text');
const btnHide = document.querySelector('#btn-hide');
btnColor.addEventListener('click', ()=>{
    if(text.classList.contains("color")){
        text.classList.remove("color");
    }else{
        text.classList.add("color");
    } 
})

btnHide.addEventListener('click', ()=>{
    if(text.classList.contains("hide")){
        text.classList.remove("hide");
    }else{
        text.classList.add("hide");
    } 
})