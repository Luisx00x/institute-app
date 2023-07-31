import useFetch from "@/Hooks/useFetch"
import { setAdminCoursesReleases, setAdminParentReleases, setAdminSectionStudents, setAdminStudentReleases, setAllCourses, setAllSectionReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const ALL_SECTIONS = process.env.NEXT_PUBLIC_ALL_SECTIONS;
const ALL_SECTIONS_RELEASES = process.env.NEXT_PUBLIC_FIND_ALL_SECTIONS_RELEASES;
const SECTION_STUDENTS = process.env.NEXT_PUBLIC_SECTION_STUDENTS;
const STUDENT_RELEASES = process.env.NEXT_PUBLIC_FIND_STUDENT_RELEASES;
const All_COURSES = process.env.NEXT_PUBLIC_ALL_COURSES;
const PARENT_RELEASES = process.env.NEXT_PUBLIC_FIND_PARENT_RELEASES;
const ALL_COURSES_RELEASES = process.env.NEXT_PUBLIC_ALL_COURSES_RELEASES;

let status;

export const getAllSections = (year, setData) => {
  
  useFetch(`${LOGIN_URL}/${ALL_SECTIONS}?year=${year}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return setData(prev => res)
    }
    throw new Error(res);
  })

}

export const findCourses = (sections, data, setData) => {

  const searchCourse = sections.filter( section => section.Grade.level === data.academyLevel);

  console.log(searchCourse, "SEARCH")

  setData( prev => {
    return {
      ...prev,
      courses: searchCourse
    }
  })
}

export const getSectionsReleases = (dispatch, year) => {

  useFetch(`${LOGIN_URL}/${ALL_SECTIONS_RELEASES}?year=${year}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) {
     return dispatch(setAllSectionReleases(res));
    }
    throw new Error(res);
  })

}

export const getAllCourses = (dispatch, year) => {

  useFetch(`${LOGIN_URL}/${All_COURSES}?year=${year}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAllCourses(res));
    throw new Error(res);
  })
  
}

export const searchAdminSectionStudents = (dispatch, sectionId) => {
  
  let status;

  useFetch(`${LOGIN_URL}/${SECTION_STUDENTS}?sectionId=${sectionId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAdminSectionStudents(res));
    throw new Error(res);
  })

}

export const findStudentReleases = (dispatch, studentId) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_RELEASES}?studentId=${studentId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAdminStudentReleases(res));
    throw new Error(res);
  })

}

export const findAdminParentReleases = (dispatch, id) => {
  
  let status;

  useFetch(`${LOGIN_URL}/${PARENT_RELEASES}?studentId=${id}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setAdminParentReleases(res));
    throw new Error(res);
  })

}

export const getAdminCoursesReleases = (dispatch, year) => {

  let status

  useFetch(`${LOGIN_URL}/${ALL_COURSES_RELEASES}?year=${year}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return dispatch(setAdminCoursesReleases(res));
    }
    throw new Error(res)
  })

}
