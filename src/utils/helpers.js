export const positionFromTop = (index) => {
  const detailContainers = document.querySelectorAll('.single-hold')
  const detailContainer = detailContainers[index]
  return detailContainer.getBoundingClientRect().top < -360
}

export const preLoadImages = (imageNames) => {
  imageNames.map((name) => {
    const image = new Image()
    image.src = require(`../img/${name}`)
    return image
  })
}
