document.querySelector('#menu').onclick = () => {
    document.querySelector('aside').classList.add('block')
}
document.querySelector('#close').onclick = () => {
    document.querySelector('aside').classList.remove('block')
}