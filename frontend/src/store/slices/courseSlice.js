import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadData } from "../../data";

const initialState = {
  courses: [],
  status: 'idle',
}

const fetchCourseData = createAsyncThunk("courses/fetchCourseData",
  async () => {
    const respone = await loadData();
    return respone.courses;
  }
)

const coursesSlices = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourse(state, action) {
      console.log(action.payload);
      state.courses = state.courses.filter(course => parseInt(course.course_id) === action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCourseData.pending, (state) => {
      state.status = "Loading";
    })
    builder.addCase(fetchCourseData.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = "Success"
    })
    builder.addCase(fetchCourseData.rejected, (state) => {
      state.status = "Failed"
    })
  }
})

export { fetchCourseData }

export const { getCourse } = coursesSlices.actions;

export const getSelectorCourses = () => {
  return state => state.courses.courses;
}

export const getCourseById = (id) => {
  return state => state.courses.courses.find(course => {
    return course.course_id === id
  });
}

export default coursesSlices.reducer;