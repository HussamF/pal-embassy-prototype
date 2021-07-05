//modal element with overlay
const modalOverlay = document.querySelector('.modal-overlay')
//Open modal header
const modalOpen = document.querySelectorAll('.modal-open')
//Close modal header
const modalClose = document.querySelectorAll('.modal-close')
//Model windows
const modalWindows = document.querySelectorAll('.modal')
//////////////////////////////////////
const header = document.querySelector('header')

//////Scroll Modal center screen//////////////
window.addEventListener('scroll', () => {
  modalWindows.forEach(modal =>{
    modal.classList.toggle('modal-scroll', window.scrollY > 10)
  })
})





//Close Modal Window when click outside
window.addEventListener('click', (event)=>{
  if(event.target === modalOverlay){
      modalWindows.forEach((modalWindow)=>{
        modalWindow.style.visibility= 'hidden'
      })
    modalOverlay.style.display = 'none'
    
    header.style.position = 'fixed'
    header.classList.add('sticky')
  }
})
//Listen to Click event Open modal Header
modalOpen.forEach(pop=>{
pop.addEventListener('click', (e)=>{
header.style.position = 'absolute'
header.classList.remove('sticky')
    modalOverlay.style.display = 'block'
    const modalPop = pop.getAttribute('data-modal')
    document.getElementById(modalPop).style.visibility = 'visible'
  
 })    
})


//Listen to Click event Close modal
modalClose.forEach(pop=>{
    pop.addEventListener('click', ()=>{
        modalOverlay.style.display = 'none'

        pop.closest('.modal').style.visibility= 'hidden'

header.style.position = 'fixed'
header.classList.add('sticky')

     })    
    })

//               Open About Modal           //

const modalAboutOpen = document.querySelectorAll('.modal-about-open')
const modalAboutOverlay = document.querySelector('.modal-about-overlay')
const modalAboutWindows = document.querySelectorAll('.modal-about')
//Listen to Click event Open modal About
modalAboutOpen.forEach(popAbout =>{
  popAbout.addEventListener('click', (e)=>{
    header.style.position = 'absolute'
    header.classList.remove('sticky')
    modalAboutOverlay.style.display = 'block'
    const modalAboutPop = popAbout.getAttribute('data-modal')
    document.getElementById(modalAboutPop).style.visibility = 'visible'

 
  })
})

//Listen to Click event Close modal About
modalClose.forEach(pop=>{
  pop.addEventListener('click', ()=>{
modalAboutOverlay.style.display = 'none'
 pop.closest('.modal-about').style.visibility= 'hidden'
 header.style.position = 'fixed'
header.classList.add('sticky')
   })    
  })
//Close Modal Abouut Window when click outside
  window.addEventListener('click', (event)=>{
    if(event.target === modalAboutOverlay){
        modalAboutWindows.forEach((modalAboutWindow)=>{
          modalAboutWindow.style.visibility= 'hidden'
        })
      modalAboutOverlay.style.display = 'none'
      header.style.position = 'fixed'
header.classList.add('sticky')
    }})