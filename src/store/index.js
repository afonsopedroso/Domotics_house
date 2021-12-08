import { configureStore } from "@reduxjs/toolkit";
import ConfigSlice from "./config";

const store = configureStore({
    reducer: {Config:ConfigSlice.reducer}
});

export default store;