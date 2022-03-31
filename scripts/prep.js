
let myImg = 'icons/default.png'
let newImg
let allColors = []

const allObjects = {
  // walls
  'spore-wall': [139, 86, 149, 255],
	'dirt-wall': [112, 70, 64, 255],
	'dacite-wall': [160, 161, 184, 255],
	'ice-wall': [211, 209, 255, 255],
	'stone-wall': [122, 122, 127, 255],
	'dune-wall': [90, 89, 89, 255],
	'sand-wall': [255, 223, 188, 255],
	'salt-wall': [244, 248, 255, 255],
	'shrubs': [112, 187, 103, 255],
	'shale-wall': [114, 116, 160, 255],
	'spore-pine': [146, 78, 148, 255],
	'snow-pine': [238, 247, 255, 255],
	'pine': [90, 159, 92, 255],
	'dark-metal': [126, 128, 143, 255],
  // plates
	'deep-water': [61, 73, 128, 255],
	'water': [71, 84, 143, 255],
	'tainted-water': [74, 57, 114, 255],
	'deep-tainted-water': [53, 41, 83, 255],
	'dark-sand-tainted-water': [57, 50, 74, 255],
	'sand-water': [116, 104, 122, 255],
	'dark-sand-water': [53, 55, 81, 255],
	'tar': [22, 24, 23, 255],
	'cryofluid': [84, 157, 181, 255],
	'slag': [196, 99, 50, 255],
	'space': [5, 0, 18, 255],
	'stone': [66, 66, 71, 255],
	'craters': [67, 67, 71, 255],
	'char': [60, 60, 66, 255],
	'basalt': [49, 47, 47, 255],
	'hot-rock': [67, 56, 49, 255],
	'magma-rock': [104, 74, 53, 255],
	'sand': [167, 137, 111, 255],
	'dark-sand': [48, 46, 46, 255],
	'dirt': [79, 49, 42, 255],
	'mud': [41, 24, 21, 255],
	'dacite': [120, 121, 134, 255],
	'grass': [84, 132, 73, 255],
	'salt': [188, 189, 191, 255],
	'snow': [179, 183, 187, 255],
	'ice': [162, 162, 194, 255],
	'ice-snow': [156, 158, 187, 255],
	'shale': [74, 70, 101, 255],
	'moss': [86, 54, 92, 255],
	'spore-moss': [86, 56, 104, 255],
	'metal-floor-1': [85, 87, 96, 255],
	'damaged-metal-floor': [83, 84, 94, 255],
	'metal-floor-2': [80, 81, 90, 255],
	'metal-floor-3': [90, 91, 101, 255],
	'metal-floor-4': [93, 95, 106, 255],
	'metal-floor-5': [108, 88, 76, 255],
	'dark-panel-1': [61, 63, 72, 255],
	'dark-panel-2': [65, 62, 69, 255],
	'dark-panel-3': [59, 60, 69, 255],
	'dark-panel-4': [67, 69, 79, 255],
	'dark-panel-5': [70, 67, 75, 255],
	'dark-panel-6': [78, 69, 76, 255]
}
let load = true
let preloaded = false
function preload() {
  if (load) {
    myImg = loadImage(myImg)
    preloaded = true
    load = false
  }
}

let start = false
function draw() {
  if (load) {
    preload()
  } else if (preloaded) {
    let canva = createCanvas(myImg.width, myImg.height)
    canva.parent('container')
    background(255)
    image(myImg, 0, 0)
    if (start) {
      start = false
      noLoop()
      makeImg()
    }
  }


}

function makeImg() {

  console.log('start converting...')

  newImg = createImage(myImg.width, myImg.height)

  function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }
  let progressPersent = null

  sequence(0)
  function sequence(i) {

    if (i >= myImg.height) {
      console.log('done')
      return
    }

    setTimeout(() => {
      newImg.loadPixels()
      const curPersent = ~~((i+1)/myImg.height*100)
      info.text = `${curPersent}%${curPersent === 100 ? ', You can save your image.' : ''}<br/><progress class="progressStyles" max="100" value="${curPersent}">`

      if (curPersent === 100) start = false

      for (let j = 0; j < myImg.width; j++) {
        const curPixel = myImg.get(j, i)
        let nextPixel
        let val = Infinity
        for (let k = 0; k < allColors.length; k++) {
          const curValue = curPixel.map((x, l) => Math.abs(x - allColors[k][l])).reduce((a, b) => a + b)
          if (curValue < val) {
            nextPixel = allColors[k]
            val = curValue
          }
        }
        writeColor(newImg, j, i, nextPixel[0], nextPixel[1], nextPixel[2], nextPixel[3])
      }
      newImg.updatePixels()
      image(newImg, 0, 0)
      sequence(++i)
    }, 0)


  }

}
