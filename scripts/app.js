// pallete
const color = {
  textLight: '#ffffff',
  textDark: '#000000',
  regular: '#ffffff',
  main: '#fca311',
  background: '#e5e5e5',
  header: '#000000',
  link: '#14213d'
}

// bg
document.body.style.backgroundColor = color.background

// picture
const main = new StyledElement('main')

// picture size
const imgSize = new StyledElement('imgSize')

// load button
const loadContent = new StyledElement('loadContent')
loadContent.addLoader('loader')

// save button
const saveContent = new StyledElement('saveContent')
saveContent.addSaver('saver')

// canvas
const img = new StyledElement('img')
img.id = 'container'

// warning alert
const warningSize = new StyledElement('warningSize')
warningSize.text = 'Do not load huge pictures, it may lag while converting'

// adding all stuff above (++)
main.add = imgSize
main.add = img
main.add = warningSize

// all header
const headContainer = new StyledElement('headContainer')

// logo
const head = new StyledElement('head')
head.text = 'PNG to MSAV'

// ++
headContainer.add = head

// info
const info = new StyledElement('info')
info.text = 'Press the button to start converting.'

// convert button
const btn = new StyledElement('btn', 'button')
btn.text = 'Convert'
btn.pressed = () => {
  start = true
}
// ++
info.add = btn

// all stuff from options
const settings = new StyledElement('settings')

// only options (title)
const options = new StyledElement('options')

options.text = '<span style="margin-bottom: 20px;">Convert\'s options</span>'

// options buttons (input radio)
const optionsRadios = new StyledElement('optionsRadios')

optionsRadios.putRadio('plates only', 0, 'options')
optionsRadios.putRadio('all tiles', 1, 'options')
optionsRadios.putRadio('custom', -1, 'options')
optionsRadios.updateRadios('options')

// ++
options.add = optionsRadios

// hidden custom options
const optionsCustom = new StyledElement('optionsCustom')

const allStuffName = Object.keys(allObjects)
for (let i = 0; i < allStuffName.length; i++) {
  const icon = allStuffName[i]
  optionsCustom.putCheckbox(icon.split('-').join(' '), icon, 'custom')
}
optionsCustom.updateCheckboxes('custom')

// ++
settings.add = options
settings.add = optionsCustom

// side bar
const sideBarInfo = new StyledElement('sideBarInfo')

sideBarInfo.addGroup('help', 'Load your image, press convert button and wait for process. You can apply some options below.')//'After you download this app, name the image you want to convert as "myImg.png" and put it in your app folder. <br/>Click the button and wait for the process.')
sideBarInfo.addGroup('how to save', 'In new window after you press save button <div class="command">1. right-click on image</div><div class="command">2. save image as</div><div class="command">3. save</div>')
sideBarInfo.addGroup('import in game', 'To make an image a mindustry map go to <div class="command">1. editor</div><div class="command">2. new map</div><div class="command">3. menu (in map editor)</div><div class="command">4. import</div><div class="command">5. import image file</div><div class="command">6. and open converted image</div>')

// footer
const footer = new StyledElement('footer')
footer.addHtml = `<span>Made by: L' kk#6790</span><span style="user-select: none;">Copyright (c) 2022 Copyright Holder All Rights Reserved.</span>`

/*
var canvas = document.getElementById("defaultCanvas0");
var dataURL = canvas.toDataURL("image/png");
var newTab = window.open('about:blank','image from canvas');
newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
*/

// dynamic stuff
setInterval(() => {
  if (preloaded) {
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
}, 0)
