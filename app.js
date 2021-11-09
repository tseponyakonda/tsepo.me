const burger = document.querySelector('.line');
const ul = document.getElementsByTagName('ul');
const hmenu = document.querySelector('.hamburger-menu');
const aewa = document.getElementById('aewa');
const body = document.getElementById('luxy');

burger.addEventListener('click', () => {
    hmenu.classList.add('show');
    // body.classList.add('closed')
})

