import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StatusState {
  netCoins: number;
  experience: number;
  completedLessons: number;
}

const initialState: StatusState = {
  netCoins: 0,
  experience: 0,
  completedLessons: 0,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    updateNetCoins: (state, action: PayloadAction<number>) => {
      state.netCoins += action.payload;
    },
    updateExperience: (state, action: PayloadAction<number>) => {
      state.experience += action.payload;
    },
    updateCompletedLessons: (state) => {
      state.completedLessons += 1;
    },
  },
});

export const { updateNetCoins, updateExperience, updateCompletedLessons } =
  statusSlice.actions;

export default statusSlice.reducer;