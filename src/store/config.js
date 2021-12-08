import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  configs: false,
};

const ConfigSlice = createSlice({
  name: "Config",
  initialState: initialState,
  reducers: {
    setConfig(state) {
    state.configs = true;  
    },
    setConfigF(state) {
      state.configs = false;
    }
  },
});

export const { setConfig, setConfigF } = ConfigSlice.actions;

export default ConfigSlice;
