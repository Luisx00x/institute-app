import DocList from "@/components/DocList/DocList";
import { HOMEWORKS, HOMEWORKSLIST, STUDENT } from "@/const";

const CourseHomeworks = ({params}) => {

    const [id, teacherId] = params.course;

  return (
    <>
      
      <div>

        <DocList listType={HOMEWORKS} userId={teacherId} courseId={id} tableValues={HOMEWORKSLIST} call={STUDENT} />

      </div>

    </>
  )

}

export default CourseHomeworks;