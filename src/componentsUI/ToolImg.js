const ToolImg = (imgElem, descElem) => {
    const containerImg = document.createElement('div')
    const tooltipImg = document.createElement('img')
    const img = document.createElement('img')
    const desc = document.createElement('p')

    tooltipImg.src = String(imgElem)
    img.src = String(imgElem)
    img.alt = 'Картинка:)'

    containerImg.classList.add('containerImg')
    tooltipImg.classList.add('imgTooltip')
    img.classList.add('imgTooltipContainer')
    desc.classList.add('descImg')

    desc.innerHTML = descElem

    containerImg.append(img, desc, tooltipImg)

    return containerImg
}

module.exports = ToolImg
