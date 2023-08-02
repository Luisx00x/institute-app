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
    allSectionReleases: [],
    studentReleases: [],
    parentReleases: [],
    coursesReleases: [],
    sectionStudents: [],
    allCourses: []
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
    },
    setAdminSectionStudents: (state, action) => {
      state.sectionStudents = action.payload
    },
    setAdminStudentReleases: (state, action) => {
      state.studentReleases = action.payload
    },
    setAllCourses: (state, action) => {
      state.allCourses = action.payload
    },
    setAdminParentReleases: (state, action) => {
      state.parentReleases = action.payload
    },
    setAdminCoursesReleases: (state, action) => {
      state.coursesReleases = action.payload
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
    coursesReleases: [],
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
    setCoursesReleases: (state, action) => {
      state.coursesReleases = action.payload
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

export const StudentSlice = createSlice({
  name: "student",
  initialState: {
    sectionInfo: null,
    schedules: null,
    studentInfo: null,
    califications: null,
    report: null,
    releases: null
  },
  reducers: {
    setSectionInfo: (state, action) => {
      state.sectionInfo = action.payload
    },
    setSchedules: (state, action) => {
      state.schedules = action.payload
    },
    setStudentInfo: (state, action) => {
      state.studentInfo = action.payload
    },
    setCalifications: (state, action) => {
      state.califications = action.payload
    },
    setReport: (state, action) => {
      state.report = action.payload
    },
    setReleases: (state, action) => {
      state.releases = action.payload
    }
  }
})

export const ParentSlice = createSlice({
  name: "student",
  initialState: {
    parentInfo: null,
    parentStudents: null,
    studentUId: null
  },
  reducers: {
    setParentInfo: (state, action) => {
      state.parentInfo = action.payload
    },
    setParentStudents: (state, action) => {
      state.parentStudents = action.payload
    },
    setStudentUId: (state, action) => {
      state.studentUId = action.payload
    }
  }
})

export const { setUser, setModal } = Slice.actions;

export const { 
  setAllGrades, 
  setTeachers, 
  setStudents, 
  setAllSectionReleases,
  setAdminSectionStudents,
  setAdminStudentReleases,
  setAllCourses,
  setAdminParentReleases,
  setAdminCoursesReleases
   } = AdminSlice.actions;

export const { 
  setCourses,
  setTeacher, 
  setSections, 
  setGrades, 
  setCoursesReleases, 
  setSectionStudents,
  setStudentReleases,
  setParentReleases 
} = TeacherSlice.actions;

export const {
  setSectionInfo,
  setSchedules,
  setStudentInfo,
  setCalifications,
  setReport,
  setReleases
} = StudentSlice.actions;

export const {
  setParentInfo,
  setParentStudents,
  setStudentUId
} = ParentSlice.actions;