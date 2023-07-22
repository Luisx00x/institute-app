
import UploadFiles from "@/components/UploadFiles/UploadFiles";
import s from './page.module.css';
import DocList from "@/components/DocList/DocList";
import { HOMEWORKS, HOMEWORKSLIST } from "@/const";


const Homeworks = ({params}) => {

  //Params => [id, teacherId]
  const [id, teacherId] = params.id;

  return (
    <>

      <div className={s.container}>

        <UploadFiles courseId={parseInt(id)} teacherId={parseInt(teacherId)} type={HOMEWORKS} />

        <DocList listType={HOMEWORKS} userId={parseInt(teacherId)} courseId={parseInt(id)} tableValues={HOMEWORKSLIST} />

      </div>


    </>
  )
}

export default Homeworks;