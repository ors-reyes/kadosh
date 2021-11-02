window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    const socialHeader = document.querySelector('.socialHeader');
    const nav = document.querySelector('#nav');
    header.classList.toggle('sticky', window.scrollY > 0)
    socialHeader.classList.toggle('sticky', window.scrollY > 0)
    nav.classList.toggle('sticky', window.scrollY > 0)
})
