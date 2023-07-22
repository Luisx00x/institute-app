
import UploadFiles from "@/components/UploadFiles/UploadFiles";
import s from './page.module.css';
import DocList from "@/components/DocList/DocList";
import { HOMEWORKS } from "@/const";


const Homeworks = ({params}) => {

  //Params => [id, teacherId]
  const [id, teacherId] = params.id;

  return (
    <>

      <div className={s.container}>

        <UploadFiles courseId={parseInt(id)} teacherId={parseInt(teacherId)} />

        <DocList listType={HOMEWORKS} userId={parseInt(teacherId)} courseId={parseInt(id)} />

      </div>


    </>
  )
}

export default Homeworks;