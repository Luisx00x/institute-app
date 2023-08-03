import Link from "next/link";
import { usePathname } from "next/navigation";
import s from './SectionList.module.css';

const SectionList = ({sections}) => {
  
  const path = usePathname();
  
  return (
    <>

      <div className={s.container}>
      {
        sections?.map( section => {
          return(
            <Link key={`${section.id}${section.sectionName}`} className={s.link} href={`${path}/${section.id}`}>
              <div>Nivel: {section.Grade.level}</div>
              <div>Grado: {section.Grade.grade}</div>
              <div>Sección: {section.sectionName}</div>
            </Link>
          )
        })
        
      }
      </div>
    </>
  )
}

export default SectionList;