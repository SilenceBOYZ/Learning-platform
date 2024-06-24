import { configureStore } from "@reduxjs/toolkit"
import courseSlice from "./slices/courseSlice"

const store = configureStore({
  reducer: {
    courses: courseSlice
  }
})

export default store