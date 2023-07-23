import UploadFiles from '@/components/UploadFiles/UploadFiles';
import s from '../../homeworks/[...id]/page.module.css';
import DocList from '@/components/DocList/DocList';
import { CLASSES, CLASSLIST } from '@/const';
const UploadClasses = ({params}) => {

  const [courseId, teacherId] = params.class;

  return (
  <>

    <div className={s.container}>

      <UploadFiles courseId={parseInt(courseId)} teacherId={parseInt(teacherId)} type={CLASSES}/>

      <DocList listType={CLASSES} userId={parseInt(teacherId)} courseId={parseInt(courseId)} tableValues={CLASSLIST} />

    </div>

  </>
  )
} 

export default UploadClasses;