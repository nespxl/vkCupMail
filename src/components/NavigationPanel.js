Theme = require('../componentsUI/Theme.js')
NewDir = require('../componentsUI/NewDir.js')
LineHr = require('../componentsUI/LineHr.js')
WriteBtn = require('../componentsUI/WriteBtn.js')
Navbar = require('./Navbar.js')

const NavigationPanel = () => {
    const nav = Navbar()
    const btn = WriteBtn()
    const line = LineHr()
    const newDir = NewDir()
    const theme = Theme()
    const navigationDoc = document.createElement('div')
    navigationDoc.classList.add('navigation')
    navigationDoc.append(btn, nav, line, newDir, theme)

    return navigationDoc
}

module.exports = NavigationPanel
