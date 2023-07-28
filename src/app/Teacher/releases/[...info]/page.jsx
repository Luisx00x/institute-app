
const ReleaseDetails = ({params}) => {
  
  const [courseId, teacherId, sectionId, gradeId] = params.info;
  
  return (
    <>
      
      1- courseId: {courseId} <br/>
      2- teacherId: {teacherId} <br/>
      3- sectionId: {sectionId} <br/>
      4- gradeId: {sectionId} <br/>

    </>
  )
}

export default ReleaseDetails;