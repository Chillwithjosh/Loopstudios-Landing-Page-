let openMenu = document.querySelector('.open')
let closeMenu = document.querySelector('.close')
let activeMenu = document.querySelector('.active')
let h1 = document.querySelector('.h1-text-header')

openMenu.addEventListener('click',function(){
        // activeMenu.classList.toggle('active')
        // activeMenu.style.display = 'block'
        activeMenu.style.transform = 'translateX(0px)'
        openMenu.style.display = 'none'
        closeMenu.style.display = 'block'
        h1.style.visibility = 'hidden'
        
})

closeMenu.addEventListener('click',function(){
    // activeMenu.classList.toggle('active')
    // activeMenu.style.display = 'none'
    activeMenu.style.transform = 'translateX(-500px)'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    h1.style.visibility = 'visible'
})