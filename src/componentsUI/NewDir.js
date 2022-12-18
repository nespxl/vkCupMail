// import '../style/UI.css'

const NewDir = () => {
    const btnContainer = document.createElement('div')
    const btn = document.createElement('div')
    const btnLogo = document.createElement('span')

    btnContainer.classList.add('btnContainer')
    btn.classList.add('newDir')
    btnLogo.classList.add('btnPlus')

    btnLogo.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12C7 12.5523 7.44772 13 8 13C8.55229 13 9 12.5523 9 12V9H12C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7H9V4C9 3.44772 8.55228 3 8 3C7.44771 3 7 3.44772 7 4L7 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H7L7 12Z" fill="#999"/>
        </svg>
    `

    btn.innerHTML = 'Новая папка'

    btnContainer.append(btnLogo, btn)

    return btnContainer
}

module.exports = NewDir
