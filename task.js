const links = document.querySelectorAll('.menu__link[href=""]')

links.forEach(link => {
    link.onclick = () => {
        const menuItem = link.closest('.menu__item')
        const menuSub = menuItem.querySelector('.menu_sub')
        const menuActive = menuItem.querySelector('.menu_active')
        const menuActiveNext = Array.from(document.getElementsByClassName('menu menu_sub menu_active'))
    
        if (menuActive == null && menuActiveNext.length == 0) {
            menuSub.classList.add('menu_active')
            return false
        } else if (menuActive == null && menuActiveNext.length > 0) {
            menuActiveNext.forEach(next => {
                next.classList.remove('menu_active')
            })
            menuSub.classList.add('menu_active')
            return false
        } else if (menuActive != null && menuActiveNext.length > 0) {
            menuActiveNext.forEach(next => {
                next.classList.remove('menu_active')
            })
            return false
        } 
        return false
    }
})