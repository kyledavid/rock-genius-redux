export const positionFromTop = (index) => {
  let detailContainers = document.querySelectorAll('.single-hold')
  let detailContainer = detailContainers[index]
  return detailContainer.getBoundingClientRect().top < -360
}
