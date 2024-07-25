const boxes = document.querySelectorAll('.clickCont');
const iglesiaImgB = document.querySelector('.iglesiaImgB');
const QueHago = (boxes) => {
    boxes.forEach(box => {
        if (box.isIntersecting) {
            iglesiaImgB.style.display = 'block'
        }
    })
} // #2
const opciones = {
    threshold: 1
}
const observerEste = new IntersectionObserver(QueHago, opciones) // #1
boxes.forEach(box => observerEste.observe(box)) // #3
