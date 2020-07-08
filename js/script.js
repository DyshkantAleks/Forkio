'use strict'
document.querySelector('.header__dropdown').addEventListener('click', function(ev){
   ev.preventDefault()
   ev.target.classList.toggle('toggle-menu')
    document.querySelector('.header__menu').classList.toggle('toggle-menu')
})


