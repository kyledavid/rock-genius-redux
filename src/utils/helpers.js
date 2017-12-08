
// returns whether the hold is 360 or more pixels from the top
export const positionFromTop = (index) => {
  const detailContainers = document.querySelectorAll('.single-hold')
  const detailContainer = detailContainers[index]
  return detailContainer.getBoundingClientRect().top < -360
}

const getImage = (url) => {
	return new Promise((resolve, reject) => {
		const image = new Image()
		image.onload = () => {
			resolve(image)
		}
		image.onerror = () => {
			const err = `Could not load image at ${url}`
			reject(err)
		}
		image.src = require(`../img/boulders/${url}`)
	})
}

// precaches hold images
export const preLoadImages = (imageNames, path) => {
  const promises = imageNames.map(name => {
    const fullPath = path + name
    return getImage(fullPath)
  })
	Promise.all(promises)
		.catch((error) => {
			console.log(error)
		})
}

// formats boulder name with capital letters
export const formatBoulderName = (unformattedName) => {
  const splitName = unformattedName.split(/-|\s/g)
	const formattedName = splitName
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
  return formattedName
}

// returns path to images folder giver boulder and route string
export const pathToImages = (boulderName, routeName) => {
  const hyphenatedBoulder = boulderName.replace(/\s/, '-')
  const path = `${hyphenatedBoulder}/${routeName}/`
  return path
}
