import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice(
  {
    name: 'root',
    initialState: {
      rovers: [],
      images: []
    },
    reducers: {
      setRovers: () => {},
      setImages: () => {}
    }
  }
)

export const { setRovers, setImages } = rootSlice.actions
export default rootSlice.reducer

