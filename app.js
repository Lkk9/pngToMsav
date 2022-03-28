const color = {
  textLight: '#ffffff',
  textDark: '#000000',
  regular: '#ffffff',
  main: '#fca311',
  background: '#e5e5e5',
  header: '#000000',
  link: '#14213d'
}

document.body.style.backgroundColor = color.background

const main = new StyledElement(`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${color.regular};
  border-radius: 8px;
  padding: 30px;
  align-items: center;
  width: 100%;
  height: 100%;
`)

const imgSize = new StyledElement(`
  margin-bottom: 20px;
  color: ${color.textDark};
`)
setInterval(() => {
  imgSize.text = myImg?.width > 1 && myImg?.height > 1 ? `${myImg?.width}X${myImg?.height} px` : 'Not loaded'
}, 100)
main.add = imgSize

const img = new StyledElement(`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${color.textDark};
`)
img.id = 'container'

main.add = img

const headContainer = new StyledElement(`
  grid-row: 1/2;
  grid-column: 1/4;
  display: flex;
  z-index: 1;
  justify-content: center;
  background: ${color.regular};
  align-items: center;
  overflow-y: hidden;
`)

const head = new StyledElement(`
  display: flex;
  font-size: 2.5em;
  min-height: 100%;
  width: 35%;
  font-weight: 600;
  justify-content: center;
  background: ${color.header};
  align-items: center;
  color: ${color.textLight};
`)
head.text = 'PNG to MSAV'
headContainer.add = head

const info = new StyledElement(`
  grid-row: 3/4;
  grid-column: 2/3;
  background: ${color.main};
  color: ${color.textDark};
  padding: 30px 40px;
  border-radius: 8px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)

info.text = 'Press the button to start converting.'

const btn = new StyledElement(`
  background: ${color.textLight}cc;
  width: 120px;
  height: 60px;
  font-weight: 600;
  font-size: 1em;
  color: ${color.textDark}cc;
  margin-top: 40px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: none;
`, 'button')
btn.text = 'Convert'
btn.hoverStyles = `
color: ${color.textDark};
background: ${color.textLight};
box-shadow: 0px 5px 20px rgba(0,0,0,.25);
`
btn.pressed = () => {
  if (allColors.length > 0) {
    start++
    settings.element.style.display = 'none'
  }
}
info.add = btn

const settings = new StyledElement(`
  grid-row: 4/5;
  grid-column: 2/3;
  background: ${color.regular};
  color: ${color.textDark};
  border-radius: 8px;
  flex-direction: column;
`)

const options = new StyledElement(`
  background: ${color.main};
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  flex-direction: column;
`)

options.text = '<span style="margin-bottom: 20px;">Convert\'s options</span>'
const optionsRadios = new StyledElement(`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-around;
`)
optionsRadios.putRadio('plates only', 0, 'options')
optionsRadios.putRadio('all tiles', 1, 'options')
optionsRadios.putRadio('custom', -1, 'options')
optionsRadios.updateRadios('options')
setInterval(() => {
  let currentOption = +optionsRadios.currentRadioValue
  optionsCustom.element.style.display = 'none'
  if (currentOption === 0) {
    allColors = Object.values(allObjects).splice(14)
  } else if (currentOption === 1) {
    allColors = Object.values(allObjects)
  } else if (currentOption === -1) {
    optionsCustom.element.style.display = 'grid'
  }
}, 10)
options.add = optionsRadios
settings.add = options

const optionsCustom = new StyledElement(`
    display: none;
    padding: 0;
    background: ${color.background};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`)
optionsCustom.element.classList.add('optionsCustom')
const allStuffName = Object.keys(allObjects)
for (let i = 0; i < allStuffName.length; i++) {
  const icon = allStuffName[i]
  optionsCustom.putCheckbox(icon.split('-').join(' '), icon, 'custom')
}
optionsCustom.updateCheckboxes('custom')

settings.add = optionsCustom

const cssStyle = document.createElement('style')
cssStyle.innerHTML = `
    progress::-moz-progress-bar {
    background: ${color.textLight};
  }
  .side {
    background: ${color.background};
    padding: 100px 30px 20px 30px;
    color: ${color.textDark};
    user-select: text;
  }
  .topic {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    color: ${color.textDark};
    background: ${color.main};
    margin: 20px 0;
    padding: 1px 20px;
    text-transform: uppercase;
  }
  .group a {
    color: ${color.link};
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }

  .progressStyles {
    color: ${color.textLight};
    background-color: ${color.background};
    border: none;
    margin-top: 40px;
  }

  .radioGroup {
    background: ${color.regular}00;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 6px;
    border: 2px solid ${color.textDark}33;
  }

  .radioChecked {
    background: ${color.regular}00;
    box-shadow: 0px 5px 20px rgba(0,0,0,.25);
    border: none;
    cursor: default;
  }

  .checkboxGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${color.background};
    padding: 40px 20px;
    transition: 400ms;
  }

  .checkboxGroup img {
    max-height: 35px;
    max-width: 35px;
    object-fit: cover;
  }

  .checkboxChecked {
    opacity: 1;
    background: rgba(0,0,0,.125);
  }

  footer {
    background: ${color.header};
    color: ${color.textLight}88;
  }
`
document.head.appendChild(cssStyle)

const sideBarInfo = new StyledElement(`
  grid-row: 1/6;
  grid-column: 1/2;
`)
sideBarInfo.element.className = 'side'
sideBarInfo.addGroup('first steps', 'After you download this app, name the image you want to convert as "myImg.png" and put it in your app folder. <br/>Click the button and wait for the process.')
sideBarInfo.addGroup('how to save', 'In browser <div class="command">-> right-click on image</div><div class="command">-> save image as</div><div class="command">-> save</div>')
sideBarInfo.addGroup('import in game', 'To make an image a mindustry map go to <div class="command">-> editor</div><div class="command">-> new map</div><div class="command">-> menu (in map editor)</div><div class="command">-> import</div><div class="command">-> import image file</div><div class="command">-> and open converted image</div>')

const sideBarHelp = new StyledElement(`
  grid-row: 1/6;
  grid-column: 3/4;
`)
sideBarHelp.element.className = 'side'
sideBarHelp.addHtml = `<input type="file" accept="image/png">`
// sideBarHelp.addGroup('help', 'If this app not working, make sure you are running it on server (it needs to load your image), here is 3 ways that can help you.')
// sideBarHelp.addGroup('chrome extension', 'The simplest solution for chrome users is to install the <a target="_blank" href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related">Web Server for Chrome</a> extension. Then open folder with this app on your computer using the extension.')
// sideBarHelp.addGroup('text editor\'s live server', 'Also you can install the live server extension in your text editor (like VS Code or Atom) if it supports this. Then run this app from a text editor.')
// sideBarHelp.addGroup('php cli', 'If you have php Command Line Interpreter installed you can start a local server with this command:<div class="command">php -S localhost:8000</div>Then point your browser at <a target="_blank" href="http://localhost:8000/">http://localhost:8000/</a>.')
