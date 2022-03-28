// default
const color = {
  textLight: '#ffffff',
  textDark: '#000000',
  regular: '#ffffff',
  main: '#fca311',
  background: '#e5e5e5',
  header: '#000000',
  link: '#14213d'
}

// mindustry pallete
// const color = {
//   textLight: '#ffffff',
//   textDark: '#000000',
//   regular: '#ffffff',
//   main: '#FFCD66',
//   background: '#E1E9F0',
//   header: '#000000',
//   link: '#486ACD'
// }

document.body.style.backgroundColor = color.background

const main = new StyledElement(`
  grid-row: 2/3;
  grid-column: 2/4;
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

const loadContent = new StyledElement(`
  grid-row: 3/4;
  grid-column: 3/4;
  background: ${color.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`)
loadContent.addLoader('loader')

const imgSize = new StyledElement(`
  color: ${color.textDark};
`)

main.add = imgSize

const img = new StyledElement(`
  display: none;
  margin-top: 20px;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${color.textDark};
`)
img.id = 'container'

const warningSize = new StyledElement(`
  background: transparent;
  display: none;
  padding: 20px;
  color: rgba(255,0,0,.5);
`)
warningSize.text = 'Do not load huge pictures, it may lag while converting'

main.add = img
main.add = warningSize

const headContainer = new StyledElement(`
  grid-row: 1/2;
  grid-column: 1/5;
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
  height: auto;
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
    start = true
  }
}
info.add = btn

const settings = new StyledElement(`
  grid-row: 4/5;
  grid-column: 2/4;
  background: ${color.regular};
  color: ${color.textDark};
  border-radius: 8px;
  flex-direction: column;
`)

const options = new StyledElement(`
  background: ${color.main};
  width: 100%;
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

const sideBarInfo = new StyledElement(`
  grid-row: 1/8;
  grid-column: 4/5;
`)
sideBarInfo.element.className = 'side'
sideBarInfo.addGroup('help', 'Load your image, press convert button and wait for process. You can apply some options below.')//'After you download this app, name the image you want to convert as "myImg.png" and put it in your app folder. <br/>Click the button and wait for the process.')
sideBarInfo.addGroup('how to save', 'In browser <div class="command">1. right-click on image</div><div class="command">2. save image as</div><div class="command">3. save</div>')
sideBarInfo.addGroup('import in game', 'To make an image a mindustry map go to <div class="command">1. editor</div><div class="command">2. new map</div><div class="command">3. menu (in map editor)</div><div class="command">4. import</div><div class="command">5. import image file</div><div class="command">6. and open converted image</div>')

const footer = new StyledElement(`
  grid-row: 6/7;
  grid-column: 2/4;
`)
footer.element.classList.add('footer')
footer.addHtml = `<span>Made by: L' kk#6790</span><span style="user-select: none;">Copyright (c) 2022 Copyright Holder All Rights Reserved.</span>`
// sideBarHelp.addGroup('help', 'If this app not working, make sure you are running it on server (it needs to load your image), here is 3 ways that can help you.')
// sideBarHelp.addGroup('chrome extension', 'The simplest solution for chrome users is to install the <a target="_blank" href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related">Web Server for Chrome</a> extension. Then open folder with this app on your computer using the extension.')
// sideBarHelp.addGroup('text editor\'s live server', 'Also you can install the live server extension in your text editor (like VS Code or Atom) if it supports this. Then run this app from a text editor.')
// sideBarHelp.addGroup('php cli', 'If you have php Command Line Interpreter installed you can start a local server with this command:<div class="command">php -S localhost:8000</div>Then point your browser at <a target="_blank" href="http://localhost:8000/">http://localhost:8000/</a>.')

setInterval(() => {
  if (preloaded) {
    // document.getElementById('loader-label').style.display = 'none'
    img.element.style.display = 'flex'
  } else {
    document.getElementById('loader-label').style.display = 'block'
    img.element.style.display = 'none'
  }
  imgSize.text = myImg?.width > 1 && myImg?.height > 1 ? `${myImg?.width}X${myImg?.height} px` : ''

  if (myImg.width*myImg.height > 500**2) warningSize.element.style.display = 'block'
  else warningSize.element.style.display = 'none'

  let currentOption = +optionsRadios.currentRadioValue
  optionsCustom.element.style.display = 'none'
  if (currentOption === 0) {
    allColors = Object.values(allObjects).splice(14)
  } else if (currentOption === 1) {
    allColors = Object.values(allObjects)
  } else if (currentOption === -1) {
    optionsCustom.element.style.display = 'grid'
  }
}, 100)
