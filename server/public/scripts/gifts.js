const renderGifts = async () => {
    const response = await fetch("/gifts");
    const data = await response.json();

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(gift => {

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${gift.image})`

            const name = document.createElement('h3')
            name.textContent = gift.name

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            bottomContainer.appendChild(name)
            bottomContainer.appendChild(link)


            const card = document.createElement('div')
            card.classList.add('card')
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)


            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = "No Gifts Available 😞";
        mainContent.appendChild(message);
    }
}