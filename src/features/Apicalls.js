const fetchRovers = async () => {
  const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV')
  const rovers = await response.json()
  return rovers
}

const fetchImages = async () => {
  const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV')
  const photos = await response.json()
  return photos
}

export {fetchRovers, fetchImages};