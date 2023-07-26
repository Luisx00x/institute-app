'use client'
import CalificationList from "@/components/CalificationList/CalificationList";
import ShowStudents from "@/components/showStudents/ShowStudents";
import { STUDENT } from "@/const";
import { useSelector } from "react-redux";

const Uploads = ({params}) => {
  
  const [courseId, teacherId, sectionId, gradeId] = params.course;
  const sections = useSelector(state => state.teacher.sections);
  const courses = useSelector(state => state.teacher.courses);

  const findSection = sections.find( section => section.id === parseInt(sectionId))
  //findSection.studends

  console.log(courses, "Courses")

  return (
    <> 
    {/* <h2>aqui</h2> */}
   {/*  courseId: {courseId}
    teacherId: {teacherId}
    sectionId: {sectionId}
    gradeId: {gradeId}
 */}
    {/* <h2>Seleccione al alumno al que desea calificar: </h2> */}

    <CalificationList list={findSection.students} skills={courses} courseId={courseId} />

    </>
  )
}

export default Uploads;