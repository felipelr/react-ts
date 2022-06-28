import { createSlice } from "@reduxjs/toolkit";

export interface ProfessionalState {
  professional?: Professional;
}

export interface Professional {
  id: number;
  name: string;
  description: string;
  document: string;
  userId: number;
  backImage?: string;
  phone?: string;
  photo?: string;
  dateBirth?: Date;
  fiveStarsRating?: number;
}

const professionalInitialState: ProfessionalState = {};

export const professionalSlice = createSlice({
  name: "Professional",
  initialState: professionalInitialState,
  reducers: {
    setProfessional: (state, action) => {
      state.professional = action.payload;
    },
  },
});

export const { setProfessional } = professionalSlice.actions;

export default professionalSlice.reducer;
