// import '../style/UI.css'

const WriteBtn = () => {
    const writeBtnContainer = document.createElement('div')
    const writeBtn = document.createElement('button')
    const writeBtnIcon = document.createElement('span')

    writeBtn.innerHTML = 'Написать письмо'
    writeBtnIcon.innerHTML = `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3471 7.04254L5.0409 14.4567L3.4665 14.7152L3.64849 13.0203L10.9225 5.63874L12.3471 7.04254ZM13.7509 5.61799L14.4528 4.90573C14.8404 4.51235 14.8358 3.8792 14.4424 3.49155C14.049 3.10391 13.4158 3.10855 13.0282 3.50193L12.3263 4.21419L13.7509 5.61799ZM15.8773 6.30953L6.00803 16.3247L1.19738 17.1146L1.73438 12.1133L11.6037 2.09813C12.7666 0.917992 14.666 0.904058 15.8462 2.067C17.0263 3.22995 17.0402 5.12939 15.8773 6.30953Z" fill="#333333"/></svg>`

    writeBtnContainer.classList.add('writeBtnContainer')
    writeBtn.classList.add('writeBtn')
    writeBtnIcon.classList.add('writeBtnIcon')

    writeBtnContainer.append(writeBtnIcon, writeBtn)

    return writeBtnContainer
}

module.exports = WriteBtn
