const body = document.body

//for phones and tablets
body.addEventListener('touchmove', e => {
    const heart = document.createElement('span')
    const size = Math.floor(Math.random() * 100)
    heart.setAttribute('style',
        `top: ${e.touches[0].clientY}px;
        left: ${e.touches[0].clientX}px;
        height: ${size}px;
        width: ${size}px;
        z-index: ${size / 100}`)
    body.append(heart)
    setTimeout(() => {
        heart.remove()
    }, 2000)
})

body.addEventListener('mousemove', e => {
    const heart = document.createElement('span')
    const size = Math.floor(Math.random() * 100)
    heart.setAttribute('style', 
        `top: ${e.clientY}px;
        left: ${e.clientX}px;
        height: ${size}px;
        width: ${size}px;
        z-index: ${size / 100}`)
    heart.className = 'heart'
    body.append(heart)
    setTimeout(() => {
        heart.remove()
    }, 2000)
})
