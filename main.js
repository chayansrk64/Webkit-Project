window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled',
    scrollY > 0)
})
