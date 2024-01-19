document.addEventListener ('DOMContentLoaded', function () {
    const header = document.querySelector('.header-container')
    const footer = document.querySelector('.footer-container')
    const body = document.querySelector('.body-container')
    const banner = document.querySelector ('.banner-container')
    const bannerContent = banner.querySelector('p')
    const normalContent = bannerContent.textContent

    // All the event listeners prepared 
    // For some reason, getElementById doens't really work.

    // changed color of text to make it easier to read when changing to brighter background color.
    header.addEventListener('click', function () {
        header.style.backgroundColor = 'limegreen'
        header.style.color = 'black'
    })
    footer.addEventListener('click', function () {
        footer.style.backgroundColor = 'cyan'
        footer.style.color = 'black'
    })

    body.addEventListener('dblclick', function () {
        body.style.color = 'yellow'
    })
    
    banner.addEventListener ('mouseenter', function () {
        bannerContent.textContent = "Welcome"
    })

    banner.addEventListener ('mouseleave', function () {
        bannerContent.textContent = normalContent
    })

})