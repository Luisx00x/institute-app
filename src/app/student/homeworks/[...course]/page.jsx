import DocList from "@/components/DocList/DocList";
import { HOMEWORKS, HOMEWORKSLIST } from "@/const";

const CourseHomeworks = ({params}) => {

    const [id, teacherId] = params.course;

  return (
    <>
      
      <div>

        <DocList listType={HOMEWORKS} userId={teacherId} courseId={id} tableValues={HOMEWORKSLIST} />

      </div>

    </>
  )

}

export default CourseHomeworks;