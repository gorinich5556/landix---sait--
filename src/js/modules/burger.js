export default function burger(){
    const burger =  document.querySelector('.header__burger')
    const menu =  document.querySelector('.header__menu')

    burger.addEventListener('click', onBurger)

    function onBurger(){
        menu.classList.toggle('active')
        burger.classList.toggle('active')
    }
}