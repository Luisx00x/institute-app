import Link from "next/link";
import { usePathname } from "next/navigation";

const SectionList = ({sections}) => {
  
  const path = usePathname();
  
  return (
    <>
      {
        sections?.map( section => {
          return(
            <Link href={`${path}/${section.id}`}>
              <div>Nivel: {section.Grade.level}</div>
              <div>Grado: {section.Grade.grade}</div>
              <div>Sección: {section.sectionName}</div>
            </Link>
          )
        })

      }
    </>
  )
}

export default SectionList;