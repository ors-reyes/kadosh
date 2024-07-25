const boxes = document.querySelectorAll('.clickCont');
const iglesiaImgB = document.querySelector('.oraDivicionImg2');
const kids = document.querySelector('.genDivicionImgGC');
const QueHago = (boxes) => {
    boxes.forEach(box => {
        if (box.isIntersecting) {
            kids.style.display = 'block'
        }
    })
} // #2
const opciones = {
    threshold: 1
}
const observerEste = new IntersectionObserver(QueHago, opciones) // #1
boxes.forEach(box => observerEste.observe(box)) // #3
