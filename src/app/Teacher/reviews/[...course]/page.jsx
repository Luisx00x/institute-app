import { HOMEWORKS, HOMEWORKSLIST, REVIEW, TEACHER } from "@/const";
import s from '../../homeworks/[...id]/page.module.css';
import DocList from "@/components/DocList/DocList";

const HomeworkSelect = ({params}) => {

  const [courseId, teacherId] = params.course;

  
  return (
    <>

      <div className={s.container}>

        <DocList 
        listType={HOMEWORKS} 
        userId={parseInt(teacherId)} 
        courseId={parseInt(courseId)} 
        tableValues={HOMEWORKSLIST}
        call={TEACHER}
        options={REVIEW}
        />

      </div>

    
    </>
  )

}

export default HomeworkSelect;