import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice(
  {
    name: 'root',
    initialState: {
      rovers: [],
      images: []
    },
    reducers: {
      setRovers: (state, action) => {
        state.rovers = action.payload
      },
      setImages: (state, action) => {
        state.images = action.payload.slice(0, 1000)
      }
    }
  }
)

export const { setRovers, setImages } = rootSlice.actions
export default rootSlice.reducer

