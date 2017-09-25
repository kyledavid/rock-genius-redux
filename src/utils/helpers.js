// returns whether the hold is 360 or more pixels from the top
export const positionFromTop = (index) => {
  const detailContainers = document.querySelectorAll('.single-hold')
  const detailContainer = detailContainers[index]
  return detailContainer.getBoundingClientRect().top < -360
}

// precaches hold images
export const preLoadImages = (imageNames, path) => {
  imageNames.map((name) => {
    const image = new Image()
    const fullPath = path + name
    image.src = require(`../img/boulders/${fullPath}`)
    return image
  })
}

export const formatBoulderName = (unformattedName) => {
  let formattedName = unformattedName.split('-')
  return formattedName.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}
