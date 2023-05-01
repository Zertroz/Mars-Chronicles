const fetchRovers = async () => {
  try{
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV');
    if(!response.ok) {
      throw new Error(response.status);
    }
    const rovers = await response.json();
    return rovers;
  }catch(error) {
    return error;
  }
}

const fetchImages = async (type, rover, date, camera = '') => {
  try {
    camera = camera && '&camera=' + camera;
    console.log(camera)
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${type}=${date}${camera}&api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV`);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const photos = await response.json();
    return photos;
  }catch(error) {
    return error;
  }
}

export {fetchRovers, fetchImages};
