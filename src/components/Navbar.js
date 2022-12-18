const Navbar = () => {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const inbox = document.createElement('li')
    const inboxLink = document.createElement('a')
    const inboxText = document.createElement('p')
    const inboxLogo = document.createElement('span')
    const important = document.createElement('li')
    const importantLink = document.createElement('a')
    const importantText = document.createElement('p')
    const importantLogo = document.createElement('span')
    const sent = document.createElement('li')
    const sentLink = document.createElement('a')
    const sentText = document.createElement('p')
    const sentLogo = document.createElement('span')
    const drafts = document.createElement('li')
    const draftsLink = document.createElement('a')
    const draftsText = document.createElement('p')
    const draftsLogo = document.createElement('span')
    const archive = document.createElement('li')
    const archiveLink = document.createElement('a')
    const archiveText = document.createElement('p')
    const archiveLogo = document.createElement('span')
    const spam = document.createElement('li')
    const spamLink = document.createElement('a')
    const spamText = document.createElement('p')
    const spamLogo = document.createElement('span')
    const trash = document.createElement('li')
    const trashLink = document.createElement('a')
    const trashText = document.createElement('p')
    const trashLogo = document.createElement('span')

    nav.classList.add('nav')
    ul.classList.add('nav__list')
    inbox.classList.add('nav__elem')
    important.classList.add('nav__elem')
    sent.classList.add('nav__elem')
    drafts.classList.add('nav__elem')
    archive.classList.add('nav__elem')
    spam.classList.add('nav__elem')
    trash.classList.add('nav__elem')
    inboxLink.classList.add('nav__link')
    importantLink.classList.add('nav__link')
    sentLink.classList.add('nav__link')
    draftsLink.classList.add('nav__link')
    archiveLink.classList.add('nav__link')
    spamLink.classList.add('nav__link')
    trashLink.classList.add('nav__link')
    inboxLogo.classList.add('nav__logo')
    importantLogo.classList.add('nav__logo')
    sentLogo.classList.add('nav__logo')
    draftsLogo.classList.add('nav__logo')
    archiveLogo.classList.add('nav__logo')
    spamLogo.classList.add('nav__logo')
    trashLogo.classList.add('nav__logo')
    inboxText.classList.add('nav__text')
    importantText.classList.add('nav__text')
    sentText.classList.add('nav__text')
    draftsText.classList.add('nav__text')
    archiveText.classList.add('nav__text')
    spamText.classList.add('nav__text')
    trashText.classList.add('nav__text')

    // ссылки к кнопкам на панели
    inboxLink.href = '/inbox'
    importantLink.href = '/important'
    sentLink.href = '/sent'
    draftsLink.href = '/drafts'
    archiveLink.href = '/archive'
    spamLink.href = '/spam'
    trashLink.href = '/trash'

    // иконки к панели
    inboxLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.29289 11.5429C4.90237 11.9334 4.90237 12.5666 5.29289 12.9571C5.68342 13.3476 6.31658 13.3476 6.70711 12.9571L8.44557 11.2186L9.3415 12.0026C9.71852 12.3325 10.2815 12.3325 10.6585 12.0026L11.5544 11.2186L13.2929 12.9571C13.6834 13.3476 14.3166 13.3476 14.7071 12.9571C15.0976 12.5666 15.0976 11.9334 14.7071 11.5429L13.0629 9.89871L14.6585 8.50258C15.0741 8.13889 15.1163 7.50713 14.7526 7.0915C14.3889 6.67586 13.7571 6.63374 13.3415 6.99742L10 9.92123L6.6585 6.99742C6.24287 6.63374 5.61111 6.67586 5.24742 7.0915C4.88374 7.50713 4.92586 8.13889 5.3415 8.50258L6.93708 9.89871L5.29289 11.5429Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V14C18 15.6569 16.6569 17 15 17H5C3.34315 17 2 15.6569 2 14V6ZM5 5C4.44772 5 4 5.44772 4 6V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V6C16 5.44772 15.5523 5 15 5H5Z" fill="#333333"/></svg>`
    importantLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H8.38197C9.13951 3 9.83204 3.428 10.1708 4.10557L10.618 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V5ZM8.38197 5H5V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V8C15 7.44772 14.5523 7 14 7H9.38197L8.38197 5Z" fill="#333333"/></svg>`
    sentLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3827 3.07612C10.7564 3.2309 11 3.59554 11 4V6.5H12C14.7614 6.5 17 8.73858 17 11.5V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 14.6193 13.8807 13.5 12.5 13.5H11V16C11 16.4045 10.7564 16.7691 10.3827 16.9239C10.009 17.0787 9.57889 16.9931 9.29289 16.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289L9.29289 3.29289C9.57889 3.00689 10.009 2.92134 10.3827 3.07612ZM15 12.2578V11.5C15 9.84314 13.6569 8.5 12 8.5H10C9.44772 8.5 9 8.05228 9 7.5V6.41421L5.41421 10L9 13.5858V12.5C9 11.9477 9.44772 11.5 10 11.5H12.5C13.4251 11.5 14.285 11.7791 15 12.2578Z" fill="#333333"/></svg>`
    draftsLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7C13 7.55228 12.5523 8 12 8H8C7.44771 8 7 7.55228 7 7C7 6.44772 7.44771 6 8 6H12C12.5523 6 13 6.44772 13 7Z" fill="#333333"/><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8C7.44771 9 7 9.44772 7 10C7 10.5523 7.44771 11 8 11H12Z" fill="#333333"/><path d="M10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H8C7.44771 12 7 12.4477 7 13C7 13.5523 7.44771 14 8 14H10Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 15C3 16.6569 4.34315 18 6 18H14C15.6569 18 17 16.6569 17 15V5C17 3.34315 15.6569 2 14 2H6C4.34315 2 3 3.34315 3 5V15ZM6 16C5.44772 16 5 15.5523 5 15V5C5 4.44771 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5V15C15 15.5523 14.5523 16 14 16H6Z" fill="#333333"/></svg>`
    archiveLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.82843 3C7.03278 3 6.26972 3.31607 5.70711 3.87868L3.87868 5.70711C3.31607 6.26972 3 7.03278 3 7.82843V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V7.82843C17 7.03278 16.6839 6.26972 16.1213 5.70711L14.2929 3.87868C13.7303 3.31607 12.9672 3 12.1716 3H7.82843ZM7.12132 5.29289C7.30886 5.10536 7.56321 5 7.82843 5H12.1716C12.4368 5 12.6911 5.10536 12.8787 5.29289L14.7071 7.12132C14.8946 7.30886 15 7.56321 15 7.82843V14C15 14.5523 14.5523 15 14 15H6C5.44772 15 5 14.5523 5 14V7.82843C5 7.56321 5.10536 7.30886 5.29289 7.12132L7.12132 5.29289ZM6.74076 9.69064C7.10018 9.27131 7.73148 9.22275 8.15081 9.58217L9.00002 10.1672V7.34143C9.00002 6.78915 9.44773 6.34143 10 6.34143C10.5523 6.34143 11 6.78915 11 7.34143V10.1672L11.8492 9.58217C12.2686 9.22275 12.8999 9.27131 13.2593 9.69064C13.6187 10.11 13.5701 10.7413 13.1508 11.1007L10 13.6585L6.84923 11.1007C6.4299 10.7413 6.38134 10.11 6.74076 9.69064Z" fill="#333333"/></svg>`
    spamLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9865 4C15.4342 4 14.9865 4.44772 14.9865 5V12C14.9865 12.5523 15.4342 13 15.9865 13C16.5387 13 16.9865 12.5523 16.9865 12V5C16.9865 4.44772 16.5387 4 15.9865 4ZM9.18911 14.838L9.93864 13.8076L10.1128 13.5682L11.721 11.3573C11.8882 11.1361 11.9999 10.8501 11.9999 10.5765V8.00022C11.9999 6.89556 11.1042 6.00011 9.99954 6.00011L6.25055 6.00001C5.82607 6.00001 5.46615 6.24066 5.34424 6.57241L3.43304 5.98307L3.44868 5.93235L3.46699 5.88254C3.92013 4.64948 5.11619 4.00001 6.25055 4.00001H6.25061L9.99953 4.00011H9.9996C12.2085 4.00014 13.9999 5.79072 13.9999 8.00022V10.5765C13.9999 11.3499 13.7051 12.042 13.3301 12.5452L10.8065 16.0145L10.7559 16.0841L10.6995 16.1491C10.2275 16.6928 9.49583 17.047 8.68645 16.9952C8.20556 16.9806 7.64771 16.8576 7.13927 16.4923C6.58418 16.0936 6.2977 15.5572 6.16132 15.0989C6.03686 14.6805 6.02279 14.2862 6.03189 14H4.9991C4.46203 14 3.56806 13.8799 2.84924 13.2021C1.9776 12.3802 1.87365 11.2519 2.12934 10.3148C2.25756 9.84484 2.58927 8.74432 2.8772 7.79822C3.02363 7.31705 3.16254 6.86344 3.2648 6.53025L3.3872 6.13192L3.42105 6.02198L3.42995 5.9931L3.43224 5.98566L3.43283 5.98375L3.43298 5.98326L3.43303 5.98313C3.43304 5.98309 3.43304 5.98307 5.34424 6.57241C5.34424 6.57241 4.29623 9.97107 4.05881 10.8412C3.8214 11.7114 4.41611 12 4.9991 12H7.99988C8.29146 12 8.29303 12.3264 8.22474 12.7638C8.20609 12.8833 8.18223 13.011 8.15764 13.1426L8.15764 13.1426L8.15439 13.1601C8.11236 13.3851 8.06879 13.6209 8.04594 13.8457C8.04072 13.897 8.03658 13.9477 8.03379 13.9976C8.00298 14.5479 8.13561 14.9967 8.78663 14.9967C8.94147 15.0156 9.091 14.951 9.18911 14.838ZM10.0298 14.1453C10.0298 14.1453 10.0296 14.1426 10.0297 14.1367C10.03 14.1423 10.0299 14.1452 10.0298 14.1453Z" fill="#333333"/></svg>`
    trashLogo.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C11.1038 2 12 2.8962 12 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H8C8 2.8962 8.8962 2 10 2Z" fill="#333333"/><path d="M7.07284 7.97676C7.00823 7.42826 6.51121 7.036 5.96272 7.10062C5.41423 7.16523 5.02197 7.66225 5.08658 8.21074L6.03174 16.234C6.15038 17.2411 7.00395 18 8.01801 18H11.985C12.9991 18 13.8527 17.2411 13.9713 16.234L14.9165 8.21074C14.9811 7.66225 14.5888 7.16523 14.0403 7.10062C13.4918 7.036 12.9948 7.42826 12.9302 7.97676L11.985 16H8.01801L7.07284 7.97676Z" fill="#333333"/></svg>`

    const themeHover = JSON.parse(localStorage.getItem('theme'))

    // В зависимости от url даем стили нав панели
    function urlTrackNavbar(url) {
        if(url === 'http://localhost:3000/inbox') {
            inboxLink.classList.add('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/important') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.add('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/sent') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.add('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/drafts') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.add('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/archive') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.add('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/spam') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.add('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === 'http://localhost:3000/trash') {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.add('activeHreh')
        }
    }
    urlTrackNavbar(document.referrer) // смотрим ссылку прошлой страницы
    urlTrackNavbar(window.location.href) // смотрим ссылку нынешней страницы


    inboxText.textContent = 'Входяшие'
    importantText.textContent = 'Важное'
    sentText.textContent = 'Отправленные'
    draftsText.textContent = 'Черновики'
    archiveText.textContent = 'Архив'
    spamText.textContent = 'Спам'
    trashText.textContent = 'Корзина'

    inboxLink.append(inboxLogo, inboxText)
    inbox.append(inboxLink)
    importantLink.append(importantLogo, importantText)
    important.append(importantLink)
    sentLink.append(sentLogo, sentText)
    sent.append(sentLink)
    draftsLink.append(draftsLogo, draftsText)
    drafts.append(draftsLink)
    archiveLink.append(archiveLogo, archiveText)
    archive.append(archiveLink)
    spamLink.append(spamLogo, spamText)
    spam.append(spamLink)
    trashLink.append(trashLogo, trashText)
    trash.append(trashLink)
    ul.append(inbox, important, sent, drafts, archive, spam, trash)
    nav.append(ul)

    return nav
}

module.exports = Navbar
