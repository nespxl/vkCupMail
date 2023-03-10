InfoItem = require('./InfoItem.js')
ToolImg = require('../componentsUI/ToolImg.js')
Theme = require('../componentsUI/Theme.js')

const ItemLetters = (authorName, date, title, text, to, doc, read, categFlag, bookmarkFlag, importantFlag) => {
    const containerItem = document.createElement('a')
    const active = document.createElement('div')
    const avatar = document.createElement('img')
    const checkMail = document.createElement('p')
    const checkClickMail = document.createElement('span')
    const markMailContainer = document.createElement('div')
    const bookmark = document.createElement('p')
    const important = document.createElement('p')
    const author = document.createElement('div')
    const containerInfoMailText = document.createElement('div')
    const titleLetters = document.createElement('p')
    const textLetters = document.createElement('p')
    const timeSent = document.createElement('p')
    const dlcMailContainer = document.createElement('div')
    const flagMail = document.createElement('p')
    const flagDoc = document.createElement('div')
    const tooltipFlagDoc = document.createElement('div')
    const getHours = date?.toString().slice(11, 13)
    const getMinutes = date?.toString().slice(14, 16)
    const theme = Theme()
    let flagActiveAttach = false

    containerItem.classList.add('containerItem')
    avatar.classList.add('avatar')
    checkMail.classList.add('checkMail')
    checkClickMail.classList.add('checkClickMail')
    author.classList.add('author')
    containerInfoMailText.classList.add('containerInfoMailText')
    titleLetters.classList.add('titleLetters')
    textLetters.classList.add('textLetters')
    timeSent.classList.add('timeSent')
    dlcMailContainer.classList.add('dlcMailContainer')
    markMailContainer.classList.add('markMailContainer')
    flagDoc.classList.add('flagDoc')
    tooltipFlagDoc.classList.add('tooltipFlagDoc')
    bookmark.classList.add('bookmark')
    important.classList.add('important')

    // проверяем флаг чтения, выдаем соответствубщие стили
    if(read) {
        active.classList.add('active')
    } else {
        active.classList.add('noReadContainerItem')
        author.classList.add('activeRead')
        titleLetters.classList.add('activeRead')
    }

    let dateMonth = date?.toString().slice(5, 7)
    let dateDay = date?.toString().slice(8, 10)
    let dateYear = date?.toString().slice(0, 4)
    let monthNow = new Date().getMonth()
    let yearNow = new Date().getFullYear()
    let dayNow = new Date().getDate()

    fullDate = dateYear + '-' + dateMonth + '-' + dateDay
    fullDateNow = yearNow + '-' + monthNow + '-' + dayNow

    // форматируем месяц(цифры => слова)
    if(dateMonth === '01') {
        dateMonth = 'янв'
    } else if(dateMonth === '02') {
        dateMonth = 'фев'
    } else if(dateMonth === '03') {
        dateMonth = 'мар'
    } else if(dateMonth === '04') {
        dateMonth = 'апр'
    } else if(dateMonth === '05') {
        dateMonth = 'май'
    } else if(dateMonth === '06') {
        dateMonth = 'июн'
    } else if(dateMonth === '07') {
        dateMonth = 'июл'
    } else if(dateMonth === '08') {
        dateMonth = 'авг'
    } else if(dateMonth === '09') {
        dateMonth = 'сен'
    } else if(dateMonth === '10') {
        dateMonth = 'окт'
    } else if(dateMonth === '11') {
        dateMonth = 'ноя'
    } else if(dateMonth === '12') {
        dateMonth = 'дек'
    }

    if(fullDate === fullDateNow) {
        timeSent.innerHTML = `${getHours}:${getMinutes}`
    } else {
        timeSent.innerHTML = `${dateDay} ${dateMonth}`
    }

    // проверяем на наличие аватара, в случае отсутствия выдаем дефолтную картинку
    if(authorName?.avatar) {
        avatar.src = authorName.avatar
    } else {
        avatar.src = 'https://www.tenstickers.co.uk/wall-stickers/img/preview/one-love-rasta-wall-sticker-10261.png'
    }
    avatar.alt = 'author'

    // переводим русский язык в язык svg
    if(categFlag === "Заказы") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H5C5.48884 3 5.90603 3.35341 5.98639 3.8356L6.18046 5H17C17.5523 5 18 5.44772 18 6V9.85094C18 11.1174 17.0875 12.1996 15.8393 12.4136L6.96492 13.9352C6.91434 13.9438 6.864 13.9485 6.81422 13.9495C6.76603 13.9654 6.71601 13.9778 6.6644 13.9864C6.11963 14.0772 5.6044 13.7092 5.51361 13.1644L4.15287 5H3C2.44772 5 2 4.55228 2 4ZM7.32127 11.8449L6.51379 7H16V9.85094C16 10.1432 15.7894 10.3929 15.5014 10.4423L7.32127 11.8449ZM9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5ZM16 16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5C13 15.6716 13.6716 15 14.5 15C15.3284 15 16 15.6716 16 16.5Z" fill="#F94CA3"/></svg>`;
    } else if(categFlag === "Финансы") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H11C13.4853 3 15.5 5.01472 15.5 7.5C15.5 9.98528 13.4853 12 11 12H7.5V13H12.5C13.0523 13 13.5 13.4477 13.5 14C13.5 14.5523 13.0523 15 12.5 15H7.5V16C7.5 16.5523 7.05228 17 6.5 17C5.94772 17 5.5 16.5523 5.5 16V15C4.94772 15 4.5 14.5523 4.5 14C4.5 13.4477 4.94772 13 5.5 13V12C4.94772 12 4.5 11.5523 4.5 11C4.5 10.4477 4.94772 10 5.5 10V4C5.5 3.44772 5.94772 3 6.5 3ZM7.5 10H11C12.3807 10 13.5 8.88071 13.5 7.5C13.5 6.11929 12.3807 5 11 5H7.5V10Z" fill="#24C780"/></svg>`;
    } else if(categFlag === "Регистрации") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6569 4.92897C12.4853 3.7574 10.5858 3.7574 9.41425 4.92897L7.29293 7.05029C6.90241 7.44082 6.90241 8.07398 7.29293 8.46451L8.00004 9.17161C8.18758 9.35915 8.29293 9.6135 8.29293 9.87872C8.29293 10.1439 8.18758 10.3983 8.00004 10.5858L4.05029 14.5356V15.9498H5.62394L9.39982 12.0148C9.58592 11.8208 9.84226 11.71 10.111 11.7072C10.3798 11.7044 10.6384 11.81 10.8285 12L11.5356 12.7071C11.9261 13.0977 12.5593 13.0977 12.9498 12.7071L15.0711 10.5858C16.2427 9.41425 16.2427 7.51476 15.0711 6.34319L13.6569 4.92897ZM8.00004 3.51476C9.95266 1.56214 13.1185 1.56214 15.0711 3.51476L16.4853 4.92897C18.4379 6.88159 18.4379 10.0474 16.4853 12L14.364 14.1214C13.1973 15.288 11.3089 15.2929 10.1362 14.1361L6.77184 17.6422C6.58326 17.8387 6.32267 17.9498 6.05029 17.9498H3.05029C2.49801 17.9498 2.05029 17.5021 2.05029 16.9498V14.1214C2.05029 13.8561 2.15565 13.6018 2.34319 13.4143L5.87872 9.87872C4.70715 8.70715 4.70715 6.80765 5.87872 5.63608L8.00004 3.51476ZM10.8284 6.34326C11.219 5.95273 11.8521 5.95273 12.2426 6.34326L13.6569 7.75747C14.0474 8.14799 14.0474 8.78116 13.6569 9.17168C13.2663 9.56221 12.6332 9.56221 12.2426 9.17168L10.8284 7.75747C10.4379 7.36694 10.4379 6.73378 10.8284 6.34326Z" fill="#EEAC2C"/></svg>`;
    } else if(categFlag === "Путешествия") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8647 2.89284C14.0363 1.72127 15.9357 1.72127 17.1073 2.89284C18.2789 4.06441 18.2789 5.96391 17.1073 7.13548L14.7171 9.52574L16.7556 14.0106C17.1244 14.8219 16.9512 15.7769 16.321 16.4071C15.449 17.2791 14.022 17.2346 13.2061 16.3098L10.7343 13.5085L10.1294 14.1134L10.3527 15.3787C10.4786 16.0925 10.2484 16.8228 9.73588 17.3354C8.71405 18.3572 7.004 18.1467 6.26051 16.9075L5.07256 14.9276L3.09265 13.7397C1.8535 12.9962 1.64298 11.2861 2.66481 10.2643C3.17734 9.75175 3.9077 9.52153 4.62149 9.64749L5.88675 9.87077L6.49167 9.26585L3.69038 6.79413C2.76564 5.97818 2.72109 4.5512 3.59313 3.67917C4.22332 3.04898 5.17831 2.8758 5.98965 3.24459L10.4744 5.28312L12.8647 2.89284ZM15.6931 4.30705C15.3026 3.91653 14.6694 3.91653 14.2789 4.30705L11.3986 7.18736C11.1038 7.48211 10.6572 7.56311 10.2777 7.39062L5.16204 5.06533C5.10967 5.04152 5.04802 5.0527 5.00734 5.09338C4.95105 5.14967 4.95393 5.24178 5.01362 5.29445L8.61307 8.47044C8.82007 8.65308 8.94235 8.91316 8.95097 9.18908C8.95958 9.46499 8.85375 9.73219 8.65856 9.92739L6.9328 11.6531C6.70206 11.8839 6.37326 11.9875 6.05191 11.9308L4.27392 11.6171C4.20282 11.6045 4.13007 11.6274 4.07902 11.6785C3.97724 11.7803 3.99821 11.9506 4.12164 12.0247L6.31593 13.3412C6.45668 13.4257 6.57447 13.5435 6.65892 13.6842L7.9755 15.8785C8.04955 16.002 8.21989 16.0229 8.32167 15.9211C8.37272 15.8701 8.39565 15.7973 8.3831 15.7262L8.06934 13.9483C8.01263 13.6269 8.11628 13.2981 8.34702 13.0674L10.0728 11.3416C10.268 11.1464 10.5352 11.0406 10.8111 11.0492C11.087 11.0578 11.3471 11.1801 11.5297 11.3871L14.7058 14.9866C14.7584 15.0463 14.8505 15.0492 14.9068 14.9929C14.9475 14.9522 14.9587 14.8905 14.9349 14.8382L12.6096 9.72246C12.4371 9.34298 12.5181 8.8963 12.8128 8.60155L15.6931 5.72127C16.0836 5.33074 16.0836 4.69758 15.6931 4.30705Z" fill="#C15DF3"/></svg>`;
    } else if(categFlag === "Билеты") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.18017 3 2 4.70069 2 6.4C2 7.0099 2.18585 7.55632 2.36369 7.98928C2.43833 8.17099 2.52041 8.35275 2.59374 8.51511L2.63557 8.60785C2.72255 8.80124 2.79544 8.96812 2.85411 9.12689C2.94271 9.36664 3 9.66561 3 10C3 10.3344 2.94271 10.6334 2.85411 10.8731C2.79544 11.0319 2.72255 11.1988 2.63557 11.3921L2.59374 11.4849L2.59374 11.4849C2.52041 11.6473 2.43833 11.829 2.36369 12.0107C2.18585 12.4437 2 12.9901 2 13.6C2 15.2993 3.18017 17 5 17H15C16.8198 17 18 15.2993 18 13.6C18 12.9901 17.8142 12.4437 17.6363 12.0107C17.5617 11.829 17.4796 11.6473 17.4063 11.4849L17.4063 11.4849L17.3644 11.3921C17.2774 11.1988 17.2046 11.0319 17.1459 10.8731C17.0573 10.6334 17 10.3344 17 10C17 9.66561 17.0573 9.36664 17.1459 9.12688C17.2046 8.96812 17.2774 8.80124 17.3644 8.60785L17.4063 8.51512C17.4796 8.35276 17.5617 8.17099 17.6363 7.98928C17.8142 7.55632 18 7.0099 18 6.4C18 4.70069 16.8198 3 15 3H5ZM4 6.4C4 5.44834 4.61069 5 5 5L11 5V6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6V5L15 5C15.3893 5 16 5.44834 16 6.4C16 6.61603 15.9329 6.87237 15.7863 7.22938C15.7259 7.37632 15.6606 7.52104 15.5875 7.683L15.5404 7.78745C15.4521 7.98393 15.3544 8.20502 15.2699 8.43362C15.0943 8.90873 15 9.44375 15 10C15 10.5562 15.0943 11.0913 15.2699 11.5664C15.3544 11.795 15.4521 12.0161 15.5404 12.2126L15.5875 12.317L15.5875 12.317C15.6606 12.479 15.7259 12.6237 15.7863 12.7706C15.9329 13.1276 16 13.384 16 13.6C16 14.5517 15.3893 15 15 15H13V14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V15H5C4.61069 15 4 14.5517 4 13.6C4 13.384 4.06706 13.1276 4.2137 12.7706C4.27406 12.6237 4.33938 12.479 4.41248 12.317L4.45956 12.2126C4.54793 12.0161 4.64563 11.795 4.73011 11.5664C4.90569 11.0913 5 10.5562 5 10C5 9.44375 4.90569 8.90873 4.73011 8.43362C4.64563 8.20503 4.54793 7.98393 4.45956 7.78745L4.41247 7.68301C4.33937 7.52104 4.27406 7.37633 4.2137 7.22938C4.06706 6.87237 4 6.61603 4 6.4ZM12 8C11.4477 8 11 8.44772 11 9V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V9C13 8.44772 12.5523 8 12 8Z" fill="#3BBAFE"/></svg>`;
    } else if(categFlag === "Штрафы и налоги") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 3C11.0001 3.55228 10.5523 4 10.0001 4C9.44778 4 9.00006 3.55228 9.00006 3C9.00006 2.44772 9.44778 2 10.0001 2C10.5523 2 11.0001 2.44772 11.0001 3ZM10.9334 12.8626C10.8575 13.4097 11.2395 13.9146 11.7865 13.9905C12.6477 14.1099 12.9201 14.5566 12.9822 14.8302C13.0615 15.1793 12.8944 15.2588 12.8743 15.2668L10.0001 15.9705L7.12585 15.2668C7.10573 15.2588 6.93867 15.1793 7.01793 14.8302C7.08004 14.5566 7.35247 14.1099 8.2136 13.9905C8.76065 13.9146 9.14262 13.4097 9.06675 12.8626C8.99273 12.3289 8.51026 11.9523 7.97876 12.0047C7.94651 12.0016 7.91381 12 7.88074 12C7.72797 12 7.29159 11.9567 6.74305 11.8036C6.20168 11.6526 5.61717 11.4126 5.12956 11.0608C4.64922 10.7143 4.28835 10.2795 4.11596 9.72485C3.94406 9.1717 3.92386 8.38439 4.33265 7.26634C4.39201 7.10399 4.40765 6.93097 4.38073 6.76389L5.44571 7.41009C5.66503 7.54337 5.78342 7.66773 5.85628 7.79545C5.92953 7.92386 6.00007 8.13175 6.00007 8.5C6.00007 9.05228 6.44779 9.5 7.00007 9.5C7.55235 9.5 8.00007 9.05228 8.00007 8.5C8.00007 7.86825 7.8763 7.30022 7.5935 6.80446C7.31035 6.30809 6.91063 5.95987 6.48321 5.70024L3.92021 4.14508C3.68704 4.00359 3.4062 3.96349 3.14274 4.03405C2.87929 4.10462 2.65609 4.27973 2.52485 4.51882C2.09855 5.29543 2.05268 6.18747 2.32325 6.96481C1.92472 8.23368 1.90551 9.35123 2.20607 10.3184C2.53621 11.3807 3.21651 12.1468 3.95944 12.6828C4.44009 13.0296 4.95711 13.2881 5.45012 13.4794C5.26882 13.7605 5.14025 14.0672 5.06757 14.3874C4.82408 15.4598 5.25961 16.8379 6.61069 17.1995L6.63143 17.2048L9.74324 17.9667C9.82601 17.9887 9.91226 18.0003 10.0001 18.0002C10.0879 18.0003 10.1741 17.9887 10.2569 17.9667L13.3687 17.2048L13.3894 17.1995C14.7405 16.8379 15.176 15.4598 14.9326 14.3874C14.8566 14.0529 14.7197 13.7332 14.5254 13.4419C14.9896 13.2547 15.4714 13.0074 15.9214 12.6828C16.6643 12.1468 17.3446 11.3807 17.6747 10.3184C17.9753 9.35123 17.9561 8.23368 17.5575 6.96481C17.8281 6.18747 17.7822 5.29543 17.3559 4.51882C17.2247 4.27973 17.0015 4.10462 16.7381 4.03405C16.4746 3.96349 16.1938 4.00359 15.9606 4.14508L13.3976 5.70024C12.9702 5.95987 12.5705 6.30809 12.2873 6.80446C12.0045 7.30022 11.8807 7.86825 11.8807 8.5C11.8807 9.05228 12.3284 9.5 12.8807 9.5C13.433 9.5 13.8807 9.05228 13.8807 8.5C13.8807 8.13175 13.9513 7.92386 14.0245 7.79545C14.0974 7.66773 14.2158 7.54337 14.4351 7.41009L15.5001 6.76389C15.4732 6.93097 15.4888 7.10399 15.5481 7.26634C15.9569 8.38439 15.9367 9.1717 15.7648 9.72485C15.5925 10.2795 15.2316 10.7143 14.7512 11.0608C14.2636 11.4126 13.6791 11.6526 13.1377 11.8036C12.5892 11.9567 12.1528 12 12.0001 12C11.9876 12 11.9752 12.0002 11.9628 12.0007C11.4549 11.9803 11.0047 12.3486 10.9334 12.8626ZM7.60564 5.05276C7.85263 4.55878 8.4533 4.35856 8.94728 4.60555C9.29878 4.7813 9.67197 4.98149 10.0001 5.24827C10.3282 4.98149 10.7013 4.7813 11.0528 4.60555C11.5468 4.35856 12.1475 4.55878 12.3945 5.05276C12.6415 5.54674 12.4413 6.14741 11.9473 6.3944C11.4498 6.64314 11.2467 6.78964 11.1427 6.91417C11.0816 6.98731 11.0007 7.11281 11.0001 7.49554C11.0001 7.49702 11.0001 7.4985 11.0001 7.49998C11.0001 8.05226 10.5524 8.49997 10.0001 8.49997C9.96555 8.49997 9.93144 8.49823 9.89782 8.49481C9.69721 8.47444 9.51413 8.39477 9.36638 8.2736C9.14275 8.09021 9.00006 7.81176 9.00006 7.49998C9.00006 7.4985 9.00006 7.49702 9.00006 7.49554C8.99944 7.11281 8.91852 6.98731 8.85745 6.91417C8.75348 6.78964 8.55033 6.64314 8.05285 6.3944C7.55887 6.14741 7.35865 5.54674 7.60564 5.05276Z" fill="#EE3C3C"/></svg>`;
    }

    checkClickMail.innerHTML = `<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.7 0.3C7.3 -0.1 6.7 -0.1 6.3 0.3L3 3.6L1.7 2.3C1.3 1.9 0.7 1.9 0.3 2.3C-0.1 2.7 -0.1 3.3 0.3 3.7L2.3 5.7C2.5 5.9 2.7 6 3 6C3.3 6 3.5 5.9 3.7 5.7L7.7 1.7C8.1 1.3 8.1 0.7 7.7 0.3Z" fill="white"/></svg>`
    important.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 14.672 11.328 14 10.5 14C9.672 14 9 14.672 9 15.5C9 16.328 9.672 17 10.5 17C11.328 17 12 16.328 12 15.5ZM12 4.5C12 3.672 11.328 3 10.5 3C9.672 3 9 3.672 9 4.5V10.5C9 11.328 9.672 12 10.5 12C11.328 12 12 11.328 12 10.5V4.5Z" fill="#FC2C38"/></svg>`

    bookmarkFlag ? 
        bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
        :
        bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`

    author.innerHTML = `${authorName?.name}` + ' ' + `${authorName?.surname}`
    titleLetters.innerHTML = `${title}`
    textLetters.innerHTML = `${text}`

    // проверяем на наличие документа в случае true добавляем иконку Скрепки
    if(doc) {
        flagMail.classList.add('flagMail')
        flagDoc.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.828 6.58722C17.2659 5.02513 14.7332 5.02513 13.1711 6.58722L13.082 6.67633C13.3662 6.84417 13.634 7.05016 13.8782 7.29433C14.1224 7.53849 14.3284 7.80637 14.4962 8.09054L14.5853 8.00144C15.3664 7.22039 16.6327 7.22039 17.4137 8.00144C18.1948 8.78248 18.1948 10.0488 17.4137 10.8299L11.1213 17.1223C9.94975 18.2939 8.05025 18.2939 6.87868 17.1223C5.70711 15.9507 5.70711 14.0512 6.87868 12.8797L10.3427 9.41565C10.7332 9.02513 11.3664 9.02513 11.7569 9.41565C12.1475 9.80617 12.1475 10.4393 11.7569 10.8299L9.0503 13.5365C8.65977 13.927 8.65977 14.5602 9.0503 14.9507C9.44082 15.3412 10.074 15.3412 10.4645 14.9507L13.1711 12.2441C14.3427 11.0725 14.3427 9.17301 13.1711 8.00144C11.9996 6.82986 10.1001 6.82986 8.9285 8.00144L5.46447 11.4654C3.51184 13.4181 3.51184 16.5839 5.46447 18.5365C7.41709 20.4891 10.5829 20.4891 12.5355 18.5365L18.828 12.2441C20.3901 10.682 20.3901 8.14932 18.828 6.58722Z" fill="#2C2D2E"/></svg>`
    }

    const docImg = {
        doc: doc
    }
    localStorage.setItem('doc', JSON.stringify(docImg))

    const img = JSON.parse(localStorage.getItem('doc'))
    const r = ToolImg(img?.doc?.img, `${img?.doc?.img.slice(0, 15)}`)

    // по клику появляется панель предпросмотра картинок
    flagDoc.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        tooltipFlagDoc.classList.toggle('tooltipFlagDocActive')
        flagDoc.classList.toggle('flagDocActive')
        if(flagActiveAttach) {
            flagActiveAttach = !flagActiveAttach
            tooltipFlagDoc.removeChild(tooltipFlagDoc)
        } else {
            flagActiveAttach = !flagActiveAttach
            tooltipFlagDoc.append(r)
        }
    })

    // по клику сохраняем данные, которые отобразим в модуле InfoItem.js
    containerItem.addEventListener('click', () => {
        const mailTo = {
            authorName: authorName,
            date: date,
            title: title,
            text: text,
            to: to,
            doc: doc,
            categFlag: categFlag,
            read: read
        }
        localStorage.setItem('mailTo', JSON.stringify(mailTo))
        containerItem.href = '/item'
    })

    // по клику добавляется/убирается галочка
    checkMail.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        checkMail.classList.toggle('activeMail')
        avatar.classList.toggle('noActiveAvatar')
        containerItem.classList.toggle('containerItemActive')
    })

    let fl = true

    // по клику добавляется/убирается флаг
    bookmark.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(fl) {
            fl = !fl
            bookmarkFlag ?
                bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`
                :
                bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
        } else {
            fl = !fl
            bookmarkFlag ? 
                bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
                :
                bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`    
        }
        bookmark.classList.toggle('bookmarkActive')
    })

    if(bookmarkFlag) {
        bookmark.classList.add('bookmarkActive')
    }

    if(importantFlag) {
        important.classList.add('importantActive')
    }

    flagDoc.append(tooltipFlagDoc)
    markMailContainer.append(bookmark, important)
    dlcMailContainer.append(flagMail, flagDoc)
    containerInfoMailText.append(titleLetters, textLetters)

    checkMail.append(checkClickMail)
    containerItem.append(active, avatar, checkMail, author, markMailContainer, containerInfoMailText, dlcMailContainer, timeSent)

    return containerItem
}

module.exports = ItemLetters
