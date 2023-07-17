import ShowStudents from '../showStudents/ShowStudents';
import s from './Information.module.css';

const Information = () => {
  return (
    <div className={s.container}>
      <ShowStudents />
    </div>
  )
}

export default Information;