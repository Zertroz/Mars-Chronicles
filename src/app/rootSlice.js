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
      setImages: () => {}
    }
  }
)

export const { setRovers, setImages } = rootSlice.actions
export default rootSlice.reducer

