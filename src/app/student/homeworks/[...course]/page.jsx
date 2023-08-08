import DocList from "@/components/DocList/DocList";
import { HOMEWORKS, HOMEWORKSLIST, STUDENT } from "@/const";
import s from '../homeworks.module.css';

const CourseHomeworks = ({params}) => {

    const [id, teacherId] = params.course;

  return (
    <>
      
      <div className={s.homeworksContainer}>

        <DocList listType={HOMEWORKS} userId={teacherId} courseId={id} tableValues={HOMEWORKSLIST} call={STUDENT} />

      </div>

    </>
  )

}

export default CourseHomeworks;