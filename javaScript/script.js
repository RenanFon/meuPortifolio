
const javaScript = document.querySelector('html')

javaScript.classList.add('js')


function initscroll(){
    const titulo = document.querySelector('h1')

    const links = document.querySelectorAll('.js-menu a[href^="#"]')


    function scrollToSection(event){
        event.preventDefault()
        const href= event.currentTarget.getAttribute('href')

        const section = document.querySelector(href)
        console.log(href)

        section.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
        }

    links.forEach((link)=>{
        link.addEventListener('click',scrollToSection)
    })
}

initscroll()

    function initaccordion(){

    const accordionlist = document.querySelectorAll('.js-accordion h2')

    

    function activeAccordion(){
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')

    }



    accordionlist.forEach((item)=>{
        item.addEventListener('click',activeAccordion)
    })
}

initaccordion()


const sections = document.querySelectorAll('.js-scroll')

const windowmetade = window.innerHeight * 0.6

function animascroll(){

    sections.forEach((section)=>{
        const sectiontop = section.getBoundingClientRect().top - windowmetade
        if(sectiontop < 0){
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll',animascroll)

animascroll()

function dom(Selector){
    const elementList = document.querySelectorAll(Selector);

    console.log(elementList);
}