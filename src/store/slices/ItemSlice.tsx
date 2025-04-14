import { createSlice } from "@reduxjs/toolkit";

interface IData {
  data: {
    createdAt: string;
    description: string;
    image: string;
    name: string;
    price: string;
    updatedAt: string;
    _id: number;
  }[];
}
const initialState: IData = {
  data: [],
};
const lining = createSlice({
  name: "lining",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = lining.actions;
export default lining.reducer;
