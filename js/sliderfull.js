const sliderContenedor =document.querySelector('.sliderContenedor')
const sliderInterno = document.querySelector('.sliderInterno')
const allItem = sliderInterno.querySelectorAll('.sliderItem')
const itemWidth = allItem[0].offsetWidth


let indexItem = 0
let posX1;
let posX2;
let initialPosition;
let finalPosition;
const totalItem = allItem.length

const btnDer = document.querySelector('.btnDer')
const btnIz = document.querySelector('.btnIz')

const firstItem = allItem[0];
const cloneFirstItem = firstItem.cloneNode(true)
sliderInterno.appendChild(cloneFirstItem)

const lastItem = allItem[allItem.length - 1]
const cloneLastItem = lastItem.cloneNode(true)
sliderInterno.insertBefore(cloneLastItem, firstItem)

btnDer.addEventListener('click', ()=> switchSlider('next'))
btnIz.addEventListener('click', ()=> switchSlider('prev'))
sliderInterno.addEventListener('transitionend', checkIndex)

sliderInterno.addEventListener('mousedown',dragStar)
sliderInterno.addEventListener('touchstart',dragStar)
sliderInterno.addEventListener('touchmove',dragMove)
sliderInterno.addEventListener('touchend',dragEnd)
function dragStar (e){
    e.preventDefault()
    initialPosition = sliderInterno.offsetLeft;
    if( e.type == 'touchstart'){
        posX1 = e.touches[0].clientX;
    }else{
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragMove;
    }
}
function dragMove(e){
    if(e.type == 'touchmove'){
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
    }else{
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
    }
    sliderInterno.style.left = `${sliderInterno.offsetLeft - posX2}px`
}
function dragEnd(e){
    finalPosition = sliderInterno.offsetLeft;
    if(finalPosition - initialPosition < -40){
        switchSlider('next', 'dragging')
    }else if(finalPosition - initialPosition > 40){
        switchSlider('prev', 'dragging')
    }else{
        sliderInterno.style = `${initialPosition}px`
    }
    document.onmouseup = null;
    document.onmousemove = null;
}
const switchSlider = (arg, arg2)=>{
    sliderInterno.classList.add('transition')
    if(!arg2){
        initialPosition = sliderInterno.offsetLeft;
    }
    if(arg == 'next'){
        sliderInterno.style.left = `${initialPosition - itemWidth}px`;
        indexItem++
    }else{
        sliderInterno.style.left = `${initialPosition + itemWidth}px`;
        indexItem--
    }
}
function checkIndex(){
    sliderInterno.classList.remove('transition')
    if(indexItem == -1){
        sliderInterno.style.left = `-${totalItem * itemWidth}px`;
        indexItem = totalItem -1
    }
    if(indexItem == totalItem){
        sliderInterno.style.left = `-${1 * itemWidth}px`;
        indexItem = 0
    }
}