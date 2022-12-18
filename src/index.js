Header = require('./components/Header.js')
HeaderItem = require('./components/HeaderItem.js')
MainPanel = require('./components/MainPanel.js')
InfoItem = require('./components/InfoItem.js')
NavigationPanel = require('./components/NavigationPanel.js')

document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const main = document.querySelector('#main')
	const item = document.querySelector('#item')
	const containerPanelMain = document.createElement('div')
	const containerPanelItem = document.createElement('div')
    const substrateNav = document.createElement('div')
	const header = Header()
	const mainPart = MainPanel()
	const navigationPanel = NavigationPanel()
	const headerItem = HeaderItem()

	containerPanelMain.classList.add('containerPanelMain')
	containerPanelItem.classList.add('containerPanelItem')
    substrateNav.classList.add('substrateNav')

	containerPanelMain.append(substrateNav, mainPart.containerIndex)
	containerPanelItem.append(substrateNav, mainPart.containerItem)

	item?.append(headerItem, navigationPanel, mainPart.containerItem)
	main?.append(header, navigationPanel, mainPart.containerIndex)
})
