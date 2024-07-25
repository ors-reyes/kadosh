const servModal = document.querySelector('.servModal')
const serCOra = document.querySelector('.serCOra')
const serSobre = document.querySelector('.serSobre')
const serEvent = document.querySelector('.serEvent')
const serCPaz = document.querySelector('.serCPaz')
const serKids = document.querySelector('.serKids')
const serGen = document.querySelector('.serGen')

const cerramodal = document.querySelector('.cerramodal')
const logoSer = document.querySelector('.logoSer')
const oraTxt = document.querySelector('.serTxt')

const orap = document.querySelector('.orap')
const sobrep = document.querySelector('.sobrep')
const eventp = document.querySelector('.eventp')
const pazp = document.querySelector('.pazp')
const kidsp = document.querySelector('.kidsp')
const genp = document.querySelector('.genp')

serCOra.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    orap.style.display = 'block'
    setTimeout(() => {
        orap.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/1casaDeOracionBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
serSobre.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    sobrep.style.display = 'block'
    setTimeout(() => {
        sobrep.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/2sobreBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
serEvent.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    eventp.style.display = 'block'
    setTimeout(() => {
        eventp.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/3eventBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
serCPaz.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    pazp.style.display = 'block'
    setTimeout(() => {
        pazp.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/4casaDePazBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
serKids.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    kidsp.style.display = 'block'
    setTimeout(() => {
        kidsp.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/5kidsBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
serGen.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(1)'
    genp.style.display = 'block'
    setTimeout(() => {
        genp.style.transform = 'scale(1)'
        logoSer.style.backgroundImage = 'url(../../assets/img/servicios/6genBTN.svg)'
        logoSer.style.opacity = '1'
      }, 700);
})
cerramodal.addEventListener('click', ()=>{
    servModal.style.transform = 'scale(0)'
    oraTxt.style.transform = 'scale(0)'
    oraTxt.style.display = 'none'
    orap.style.display = 'none'
    sobrep.style.display = 'none'
    eventp.style.display = 'none'
    pazp.style.display = 'none'
    kidsp.style.display = 'none'
    genp.style.display = 'none'
    logoSer.style.opacity = '0'
})