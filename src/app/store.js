import { configureStore } from '@reduxjs/toolkit';
import  textReducer  from "../features/textInput/TextSlice";

export const store = configureStore({
  reducer: {
    text: textReducer
    
  },
});
