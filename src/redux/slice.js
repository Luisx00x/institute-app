import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
  name: "PrimirySlice",
  initialState: {
    userLog: null,
    modal: {
      isActive: false,
      title: "",
      msg: "",
      type: null
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.userLog = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    }
  }
});

export const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    allGrades: [],
    Teachers: [],
    Students: [],
    allSectionReleases: []
  },
  reducers: {
    setAllGrades: (state, action) => {
      state.allGrades = action.payload;
    },
    setTeachers: (state, action) => {
      state.Teachers = action.payload;
    },
    setStudents: (state, action) => {
      state.Students = action.payload;
    },
    setAllSectionReleases: (state, action) => {
      state.allSectionReleases = action.payload
    }
  }
});

export const TeacherSlice = createSlice({
  name: "Teacher",
  initialState: {
    teacher: {},
    courses: [],
    sections: [],
    grades: [],
    sectionStudents: [],
    sectionReleases: [],
    studentReleses: [],
    parentReleases: []
  },
  reducers: {
    setTeacher: (state, action) => {
      state.teacher = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setSections: (state, action) => {
      state.sections = action.payload;
    },
    setGrades: (state, action) => {
      state.grades = action.payload
    },
    setSectionReleases: (state, action) => {
      state.sectionReleases = action.payload
    },
    setSectionStudents: (state, action) => {
      state.sectionStudents = action.payload
    },
    setStudentReleases: (state, action) => {
      state.studentReleses = action.payload
    },
    setParentReleases: (state, action) => {
      state.parentReleases = action.payload
    }
  }
})

export const { setUser, setModal } = Slice.actions;

export const { setAllGrades, setTeachers, setStudents, setAllSectionReleases } = AdminSlice.actions;

export const { 
  setCourses,
  setTeacher, 
  setSections, 
  setGrades, 
  setSectionReleases, 
  setSectionStudents,
  setStudentReleases,
  setParentReleases 
} = TeacherSlice.actions;