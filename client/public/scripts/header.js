// Left
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed' 

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// Right side
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
    console.log("pressed home buttons");
    
  window.location = '/'
})

headerRight.appendChild(headerButton)

// Main Container

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)


// Header
const header = document.querySelector('header')
header.appendChild(headerContainer)
