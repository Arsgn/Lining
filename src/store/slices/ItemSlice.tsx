import { createSlice } from "@reduxjs/toolkit";

interface IData {
  data: {}[];
}
const initialState: IData = {
  data: [],
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addData } = lining.actions;
export default lining.reducer;
