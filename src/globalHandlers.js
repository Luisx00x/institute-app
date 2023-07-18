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

export const searchIndividual = (id, rol, applying, dispatch) =>{

  let status;

  useFetch(`${URL_LOGIN}/queries/searchOneUser?user=${id}&rol=${rol}&applicant=${applying}`, "GET")
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
    /* dispatch(setCourses(res)); */
    if(parseInt(rol) === 3){

      const {id, name, lastName, email} = res.Teacher;
      const { Courses } = res.Teacher;
      let sections = [];
      let grades = [];

      const courses = Courses.map( course => {
        if(!sections.find(ele => ele.id === course.Section.id)) {
          sections.push({ id:course.Section.id, sectionName: course.Section.sectionName });
        }
        if(!grades.find(ele => ele.id === course.Section.Grade.id)){
          grades.push(course.Section.Grade);
        }
        return { id: course.id, courseName: course.courseName }
      });

      dispatch(setTeacher({id, name, lastName, email}));
      dispatch(setCourses(courses));
      dispatch(setSections(sections));
      dispatch(setGrades(grades));
    }
  })
  .catch(err => {
    console.error(err)
  })

}