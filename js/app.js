const header = document.querySelector('header');
const socialHeader = document.querySelector('.socialHeader');
const scrollIcon = document.querySelector('.scrollIcon');
const nav = document.querySelector('#nav');
const btn = document.querySelector('#btn');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0)
    socialHeader.classList.toggle('sticky', window.scrollY > 0)
    scrollIcon.classList.toggle('sticky', window.scrollY > 0)
    nav.classList.toggle('sticky', window.scrollY > 0)
    nav.classList.remove('active', window.scrollY > 0)
    btn.classList.toggle('sticky', window.scrollY > 0)
    logoA.classList.toggle('aPoinEvent', window.scrollY > 0)
})
btn.addEventListener('click', ()=>{
    nav.classList.remove('sticky')
    nav.classList.toggle('active')
    btn.classList.toggle('active')
})
scrollIcon.addEventListener('click', ()=>{
    window.scrollTo(0, 200)
})
const video = document.querySelector('video');
video.autoplay = true
video.loop = true
video.load()