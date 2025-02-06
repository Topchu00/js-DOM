const body = document.querySelector('body');

// Верстка через js
const header = document.createElement('header')
const headerContainer = document.createElement('div')
const headerWrapper =  document.createElement('div')
const headerLogo = document.createElement('div')
const headerNav = document.createElement('nav')
const headerButton = document.createElement('button')
const headerLogoImg = document.createElement('img')

header.classList.add('header')
headerContainer.classList.add('container')
headerWrapper.classList.add('header__wrapper')
headerLogo.classList.add('header__logo')
headerNav.classList.add('header__nav')
headerButton.classList.add('header__button')

header.style = 'padding: 16px 0;'
headerContainer.style = `
    margin: 0 auto;
    max-width: 1200px;
`

headerWrapper.style = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

headerNav.style = `
    display: flex;
    align-items: center;
    gap: 56px;
`

headerButton.style = `
    border: none;
    border-radius: 12px;
    padding: 16px 24px;
    background: #3a009f;
    color: #fff;
    cursor: pointer;
`

headerLogoImg.src = './logo.svg'
headerLogoImg.width = '48'
headerLogoImg.height = '48'

const links = ['О нас', 'Услуги', 'Производство', 'Блог', 'Контакты']

let headerNavLinks = ''
links.forEach((item) => {
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = item
    headerNavLinks += a.outerHTML
})

headerButton.textContent = 'Оставить заявку'
headerNav.innerHTML = headerNavLinks
headerLogo.append(headerLogoImg)
headerWrapper.append(headerLogo, headerNav, headerButton)
headerContainer.append(headerWrapper)
header.append(headerContainer)
body.append(header)

// const header = `
//     <header class="header">
//         <div class="container">
//             <div class="header__wrapper">
//                 <div class="header__logo">
//                     <img src="./logo.svg" width="48" height="48" alt="logo"> 
//                 </div>
//                 <nav class="header__nav">
//                     <a href="#">О нас</a>
//                     <a href="#">Услуги</a>
//                     <a href="#">Производство</a>
//                     <a href="#">Блог</a>
//                     <a href="#">Контакты</a>
//                 </nav>
//                 <button class="header__button">Оставить заявку</button>
//             </div>
//         </div>
//     </header>
// `

// body.innerHTML = header



// const section = `
//     <section class="main-banner">
//         <div class="container">
//             <div class="main-banner__wrapper">
//                 <div class="main-banner__content">
//                     <h1>Наружная  реклама в Бишкеке </h1>   
//                     <h3>Произдводство наружной рекламы и создание проектов под ключ</h3>
//                     <button>Оставить заявку</button>
//                 </div>

//                 <div class="main-banner__social">
//                     <div class="main-banner__social-items">
//                         <img src="whatsapp.svg" alt="social icon whatsapp">
//                         <img src="instagram.svg" alt="social icon instagram">
//                         <img src="facebook.svg" alt="social icon facebook">    
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// `

// header.innerHTML = section

const section = document.createElement('section')
const sectionContainer = document.createElement('div')
const sectionWrapper = document.createElement('div')
const sectionContent = document.createElement('div')
const sectionh1 = document.createElement('h1')
const sectionh3 = document.createElement('h3')
const sectionButton = document.createElement('button')
const sectionSocial = document.createElement('div')
const sectionSocialItems = document.createElement('div')
const sectionImg = document.createElement('img')
const sectionImg2 = document.createElement('img')
const sectionImg3 = document.createElement('img')

section.classList.add('main-banner')
sectionContainer.classList.add('container')
sectionWrapper.classList.add('main-banner__wrapper')
sectionContent.classList.add('main-banner__content')
sectionh1.classList.add('main-banner__h1')
sectionh3.classList.add('main-banner__h3')
sectionButton.classList.add('main-banner__button')
sectionSocial.classList.add('main-banner__social')
sectionSocialItems.classList.add('main-banner__social-items')


sectionImg.src = './whatsapp.svg'
sectionImg.width = '36'
sectionImg.height = '36'

sectionImg2.src = './instagram.svg'
sectionImg2.width = '36'
sectionImg2.height = '36'

sectionImg3.src = './facebook.svg'
sectionImg3.width = '36'
sectionImg3.height = '36'


sectionh1.textContent = 'Наружная  реклама в Бишкеке'
sectionh3.textContent = 'Произдводство наружной рекламы и создание проектов под ключ'
sectionButton.textContent = 'Оставить заявку'
sectionSocialItems.append(sectionImg, sectionImg2, sectionImg3)
sectionSocial.append(sectionSocialItems)
sectionContent.after(sectionSocial)
sectionContent.append(sectionh1, sectionh3, sectionButton)
sectionWrapper.append(sectionContent, sectionSocial)
sectionContainer.append(sectionWrapper)
section.append(sectionContainer)
header.after(section)
