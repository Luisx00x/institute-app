'use client'
import CalificationList from "@/components/CalificationList/CalificationList";
import { useSelector } from "react-redux";
import modals from '@/components/Modals/Modals.module.css';
import s from './page.module.css';

const Uploads = ({params}) => {
  
  const [courseId, teacherId, sectionId, gradeId] = params.course;
  const sections = useSelector(state => state.teacher.sections);
  const courses = useSelector(state => state.teacher.courses);

  const findSection = sections.find( section => section.id === parseInt(sectionId))
  //findSection.studends
  console.log(findSection, "CALIFICATIONS")

  console.log(courses, "Courses")

  return (
    <> 
      <div className={modals.modalContainer}>
        <div className={s.calificationContainer}>
         <CalificationList list={findSection.students} skills={courses} courseId={courseId} />
        </div>
      </div>
    </>
  )
}

export default Uploads;