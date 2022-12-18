const Theme = () => {
    const body = document.querySelector('body')
    const themeContainer = document.createElement('div')
    const theme = document.createElement('div')
    const palette = document.createElement('span')
    let activeTheme = null

    themeContainer.classList.add('themeContainer')
    theme.classList.add('theme')
    palette.classList.add('palette')

    if (JSON.parse(localStorage.getItem('theme')) !== null) {
        activeTheme = true
    }

    JSON.parse(localStorage.getItem('theme')) ? theme.innerHTML = 'Тема: темная' : theme.innerHTML = 'Тема: светлая'
    palette.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2839 13.0429L14.2838 13.0429C14.2113 13.0351 14.1417 13.0276 14.0749 13.0205C13.3917 12.9472 13.0097 12.9062 12.954 12.9024C12.4492 12.8675 11.917 12.8884 11.4745 13.1128C11.2289 13.2373 11.0126 13.4238 10.8602 13.6775C10.7128 13.9233 10.6589 14.176 10.6445 14.388C10.6183 14.7717 10.7166 15.1649 10.7842 15.4249C10.8073 15.5136 10.8297 15.5965 10.8511 15.676C10.9064 15.8808 10.9558 16.0636 10.9956 16.2669C11.1342 16.9744 10.599 17.5 10 17.5C7.92866 17.5 6.05503 16.6616 4.6967 15.3033C3.33837 13.945 2.5 12.0713 2.5 10C2.5 7.92866 3.33837 6.05503 4.6967 4.6967C6.05503 3.33837 7.92866 2.5 10 2.5C12.0713 2.5 13.945 3.33837 15.3033 4.6967C16.6616 6.05503 17.5 7.92866 17.5 10C17.5 11.414 17.0434 12.1534 16.5314 12.5478C15.9854 12.9683 15.1903 13.1401 14.2839 13.0429C14.2839 13.0429 14.2839 13.0429 14.2839 13.0429Z" stroke="#2C2D2E" stroke-width="2"/><rect x="10.8" y="4.80005" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E"/><rect x="13.2" y="8.19995" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E"/><rect x="4.30005" y="8.19995" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E"/><rect x="6.6001" y="4.80005" width="2.5" height="2.5" rx="1.25" fill="#2C2D2E"/></svg>`

    themeContainer.addEventListener('click', () => {
        activeTheme = !activeTheme
        localStorage.setItem('theme', JSON.stringify(activeTheme))
    })

    // Меняем тему по клику
    themeContainer.addEventListener('click', () => {
        JSON.parse(localStorage.getItem('theme')) ? theme.innerHTML = 'Тема: темная' : theme.innerHTML = 'Тема: светлая'
        if(JSON.parse(localStorage.getItem('theme'))) {
            body.classList.add('htmlActiveTheme')
            theme.classList.add('themeActive')
        } else {
            body.classList.remove('htmlActiveTheme')
            theme.classList.remove('themeActive')
        }
    })

    if(JSON.parse(localStorage.getItem('theme'))) {
        theme.innerHTML = 'Тема: темная'
        body.classList.add('htmlActiveTheme')
        theme.classList.add('themeActive')
    } else {
        theme.innerHTML = 'Тема: светлая'
        body.classList.remove('htmlActiveTheme')
        theme.classList.remove('themeActive')
    }

    themeContainer.append(palette, theme)

    return themeContainer
}

module.exports = Theme
