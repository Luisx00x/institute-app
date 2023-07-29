import useFetch from "@/Hooks/useFetch";
import { setSectionReleases, setSectionStudents, setStudentReleases } from "@/redux/slice";
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
const SEARCH_SECTION = process.env.NEXT_PUBLIC_SECTION_SEARCH_RELEASES;
const SECTION_STUDENTS = process.env.NEXT_PUBLIC_SECTION_STUDENTS;
const STUDENT_RELEASES = process.env.NEXT_PUBLIC_FIND_STUDENT_RELEASES;

export const searchSectionReleases = (dispatch, sectionId) => {

  let status

  useFetch(`${LOGIN_URL}/${SEARCH_SECTION}?sectionId=${sectionId}`)
  .then(res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status == 200 || status == 304){
      return dispatch(setSectionReleases(res));
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