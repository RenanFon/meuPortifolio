
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