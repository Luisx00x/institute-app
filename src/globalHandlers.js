import useFetch from "./Hooks/useFetch"
import { FAILURE } from "./const";
import { setCourses, setGrades, setModal, setSections, setTeacher } from "./redux/slice";
const URL_LOGIN = process.env.NEXT_PUBLIC_LOGIN_URL;

export const searchInformation = (path, dispatch) =>{

  let status;

  useFetch(`${URL_LOGIN}/${path}`, "GET")
  .then( res => {
    status = res.status;
    return res.json();
  })
  .then( res => {
    if(status !== 200){
      const error = {
        msg: res.message,
        title: res.name,
        isActive: true,
        type: FAILURE
      }
      dispatch(setModal(error));
      throw new Error(res)
    }
   // dispatch(setCourses(res));
  })
  .catch(err => {
    console.error(err)
  })

}

export const setTeacherInformation = (user, rol, applicant, year, dispatch) => {

  let status;

    useFetch(`${URL_LOGIN}/teacher/yearGrades?user=${user}&rol=${rol}&applicant=${applicant}&year=${year}`, "GET")
    .then( res => {
      status = res.status;
      return res.json();
    })
    .then( res => {
      if(status !== 200){
        throw new Error(res);
      }
      console.log(res, "RES")
      
      let sections = [], grades = [];
      
      res.map( course => {
        sections.push({
          id: course.Section.id,
          sectionName: course.Section.sectionName,
          students: course.Section.Students
        })

        grades.push({
          sectionId: course.Section.id,
          grade: course.Section.Grade.grade
        })
      });
      dispatch(setGrades(grades));
      dispatch(setSections(sections));
      dispatch(setCourses(res));
    })
    .catch( err => {
      console.error(err);
    })

}