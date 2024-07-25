const btnTab = document.querySelectorAll('.btnTab')
const contenidoTab = document.querySelectorAll('.contenidoTab')

const iconTab = document.querySelectorAll('.iconTabs')
const iconTabI = document.querySelectorAll('.iconTabs i')

btnTab.forEach((boton, i)=>{
    btnTab[i].addEventListener('click', ()=>{
        btnTab.forEach((boton, i)=>{
            btnTab[i].classList.remove('active')
            iconTab[i].classList.remove('active')
            iconTabI[i].classList.remove('active')
            contenidoTab[i].classList.remove('active')
        })
        btnTab[i].classList.add('active')
        iconTab[i].classList.add('active')
        iconTabI[i].classList.add('active')
        contenidoTab[i].classList.add('active')
    })
})