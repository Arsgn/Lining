import { createSlice } from "@reduxjs/toolkit";

interface IData {
  data: {}[];
  authData: {}[];
}
const initialState: IData = {
  data: [],
  authData: [],
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    useAuthStore: (state, action) => {
      state.authData.push(action.payload);
      state.authData.push(action.payload);
    },
  },
});

export const { addData, useAuthStore } = lining.actions;
export default lining.reducer;
