import UploadFiles from "@/components/UploadFiles/UploadFiles";
import s from './page.module.css';

const Homeworks = ({params}) => {

  //Params => [id, teacherId]
  const [id, teacherId] = params.id;

  return (
    <>

      <div className={s.container}>

        <UploadFiles courseId={parseInt(id)} teacherId={parseInt(teacherId)} />

        <div className={s.test}>

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nisi quidem id fugit incidunt? Quia ea consequuntur, labore vel impedit sapiente qui hic excepturi reiciendis dolore nisi architecto fugit veniam?

        </div>

      </div>


    </>
  )
}

export default Homeworks;