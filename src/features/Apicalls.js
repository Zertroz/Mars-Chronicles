// import React from 'react';
// import { useDispatch } from "react-redux";
// import { setRovers } from "../app/rootSlice";

// const dispatch = useDispatch()

const fetchRovers = async () => {
  const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV')
  const rovers = await response.json()
  console.log('rovers', rovers)
//   dispatch(setRovers(rovers.rovers))
  return rovers
}

export default fetchRovers;