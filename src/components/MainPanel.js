ItemLetters = require('./ItemLetters.js')
InfoItem = require('../components/InfoItem.js')

const MainPanel = () => {
    const containerIndex = document.createElement('main')
    const containerItem = document.createElement('main')
    const readLetters = document.createElement('div')
    const infoItem = InfoItem()

    containerIndex.classList.add('container')
    containerItem.classList.add('container')
    readLetters.classList.add('readLetters')

    async function mailTo() {
        const response = await fetch('http://localhost:3000/api/clients')
        const data = await response.json()
        data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)) // сортируем по дате возрастанию
        for(let i = 0; i < data.length; i++) {
            if(window.location.href === 'http://localhost:3000/important') {
                // с бд прилетает отсортированный массив по папкам
                if(data[i]?.folder === "Важное") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/sent') {
                if(data[i]?.folder === "Отправленные") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/drafts') {
                if(data[i]?.folder === "Черновики") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/archive') {
                if(data[i]?.folder === "Архив") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/spam') {
                if(data[i]?.folder === "Спам") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/trash') {
                if(data[i]?.folder === "Корзина") {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
            if(window.location.href === 'http://localhost:3000/inbox') {
                if(!data[i]?.folder) {
                    const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i]?.doc, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
                    readLetters.append(itemLetters)
                }
            }
        }
        return response
    }

    // смотрим, когда пользователь долистал до конца, если долистал - грузим новую порцию элементов из бд
    function scrollAddType() {
        if(document.body.offsetHeight - document.documentElement.clientHeight <= window.pageYOffset + 1) {
            mailTo()
        }
    }

    // проверка, чтобы не грузил дб на странице item
    if('http://localhost:3000/item' !== window.location.href) {
        mailTo()
    }

    // проверка, добавляем/убираем действие скролла в зависимости от странице
    if('http://localhost:3000/inbox' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/important' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/sent' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/drafts' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/archive' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/spam' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else if('http://localhost:3000/trash' === window.location.href) {
        window.addEventListener('scroll', scrollAddType)
    } else window.removeEventListener('scroll', scrollAddType)

    containerIndex.append(readLetters)
    containerItem.append(infoItem)

    return {containerIndex, containerItem}
}

module.exports = MainPanel
