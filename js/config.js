const socialObj = [{

    link: "https://www.facebook.com/Iglesia-Kadosh-152913451437525",

    iconI: "icon ors-facebook-sy"

},

{

    link: "https://www.instagram.com/iglesiakadosh/?max_id=1648609336266358362",

    iconI: "icon ors-instagram-sy"

},

{

    link: "https://twitter.com/iglesia_kadosh",

    iconI: "icon ors-twitter-sy"

},

{

    link: "https://www.youtube.com/c/IglesiaKadosh",

    iconI: "icon ors-youtube-sy"

},

{

    link: "https://www.whatsapp.com/?lang=es",

    iconI: "icon ors-whatsapp-sy"

}];

const navItemObj = [{
        link: "index.html",
        title: "La Iglesia"
    },
    {
        link: "servicios.html",
        title: "Servicios"
    },
    {
        link: "oracion.html",
        title: "Casa de Oración"
    },
    {
        link: "sobrenatural.html",
        title: "Sobrenatural"
    },
    {
        link: "generacion.html",
        title: "Generación Remanente"
    },
    {
        link: "kids.html",
        title: "Kadosh Kids"
    },
    {
        link: "paz.html",
        title: "Casa de Paz"
    },
    {
        link: "socios.html",
        title: "Socios Sobrenatural"
    },
    {
        link: "eventos.html",
        title: "Eventos"
    },
    {
        link: "libreria.html",
        title: "Librería"
    },
    {
        link: "contactos.html",
        title: "Contáctanos"
    }
];

let logo = document.querySelector('.logo p')

let logoA = document.querySelector('.logo a')

const fragmentSocial = document.createDocumentFragment();

const fragmentNav = document.createDocumentFragment();

let $socialHeader = document.querySelector('.socialHeader')

let $nav = document.querySelector('#nav')

socialObj.forEach(social =>{

    const $li = document.createElement('li')

    $li.innerHTML = `

        <a href="${social.link}" class="${social.iconI}" target="_blanck"></a>

    `

    fragmentSocial.appendChild($li)

})

navItemObj.forEach(navI =>{

    const $li = document.createElement('li')

    $li.innerHTML = `

        <a href="${navI.link}">${navI.title}</a>

    `

    fragmentNav.appendChild($li)

    if(navI.title === logo.textContent){

        $li.childNodes[1].style.color = "rgba(255,0,0,.7)"

        $li.childNodes[1].style.fontWeight = "bold"

        $li.childNodes[1].style.pointerEvents = "none"

    }

})

$socialHeader.appendChild(fragmentSocial)

$nav.appendChild(fragmentNav)