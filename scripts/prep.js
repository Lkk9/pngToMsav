let lastImg
let myImg = 'icons/default.png'
let allColors = []
let gammaCorrection = 1

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
  // plates (14)
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
	'dark-panel-6': [78, 69, 76, 255],
  // ores
  'copper': [217, 157, 115, 255],
  'lead': [140, 127, 169, 255],
  'scrap': [119, 119, 119, 255],
  'coal': [39, 39, 39, 255],
  'titanium': [141, 161, 227, 255],
  'thorium': [249, 163, 199, 255]
}
let load = false
let preloaded = false
function preload() {
  lastImg = myImg
  myImg = loadImage(myImg)
  load = false
  preloaded = true
}

function draw() {
  if (load) {
      preload()
    } else if (preloaded) {
      createCanvas(myImg.width, myImg.height)
      image(myImg, 0, 0)
      if (myImg.width > 1 && myImg.height > 1) preloaded = false
    }
}

function makeImg() {

  const canvas = document.getElementById('defaultCanvas0')
  const ctx = canvas.getContext('2d')
  const imageData = ctx.getImageData(0.0, 0.0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i+=4) {

    const curPixel = [data[i], data[i+1], data[i+2], 255].map((c, p) => p == 3 ? 255 : 255 * Math.pow((c / 255), 1/gammaCorrection))

    let nextPixel = [[0,0,0,255]]
    let val = Infinity
    for (let k = 0; k < allColors.length; k++) {
      const curValue = curPixel.map((x, l) => l == 3 ? 255 : Math.abs(x - allColors[k][l])).reduce((a, b) => a + b)
      if (curValue < val) {
        nextPixel = allColors[k]
        val = curValue
      }
    }

    data[i] = nextPixel[0]
    data[i+1] = nextPixel[1]
    data[i+2] = nextPixel[2]
    data[i+3] = 255
  }
  ctx.putImageData(imageData, 0, 0)

}
