import useFetch from "@/Hooks/useFetch";
import { setParentReleases, setSectionStudents, setStudentReleases, setCoursesReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const SECTION_STUDENTS = process.env.NEXT_PUBLIC_SECTION_STUDENTS;
const STUDENT_RELEASES = process.env.NEXT_PUBLIC_FIND_STUDENT_RELEASES;
const PARENT_RELEASES = process.env.NEXT_PUBLIC_FIND_PARENT_RELEASES;
const FIND_COURSES_RELEASES = process.env.NEXT_PUBLIC_FIND_COURSES_RELEASES;

export const searchCoursesReleases = (dispatch, courseId) => {

  let status

  useFetch(`${LOGIN_URL}/${FIND_COURSES_RELEASES}?courseId=${courseId}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return dispatch(setCoursesReleases(res));
    }
    throw new Error(res)
  })

}

export const searchSectionStudents = (dispatch, sectionId) => {

    let status;

    useFetch(`${LOGIN_URL}/${SECTION_STUDENTS}?sectionId=${sectionId}`)
    .then( res => {
      status = res.status;
      return res.json();
    })
    .then( res => {
      if(status == 200 || status == 304) return dispatch(setSectionStudents(res));
      throw new Error(res);
    })

}

export const findOneStudentInfo = (dispatch, studentId) => {

  let status;

  useFetch(`${LOGIN_URL}/${STUDENT_RELEASES}?studentId=${studentId}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setStudentReleases(res));
    throw new Error(res);
  })

}

export const findParentReleaes = (dispatch, id) => {

  let status;

  useFetch(`${LOGIN_URL}/${PARENT_RELEASES}?studentId=${id}`)
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304) return dispatch(setParentReleases(res));
    throw new Error(res);
  })

}