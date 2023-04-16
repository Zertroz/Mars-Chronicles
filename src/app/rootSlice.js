import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice(
  {
    name: 'root',
    initialState: {
      rovers: [],
      images: [],
      errorMsg: ''
    },
    reducers: {
      setRovers: (state, action) => {
        state.rovers = action.payload;
      },
      setImages: (state, action) => {
        state.images = action.payload.slice(0, 1000);
      },
      setErrorMessage: (state, action) => {
        state.errorMsg = action.payload;
      }
    }
  }
)

export const { setRovers, setImages, setErrorMessage } = rootSlice.actions;
export default rootSlice.reducer;

