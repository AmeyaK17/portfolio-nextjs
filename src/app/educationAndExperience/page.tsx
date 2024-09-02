import EducationAndExperience from '@/components/EducationAndExperience'
import GridBackground from '@/components/GridBackground'

const page = () => {
  return (
    <GridBackground>
      <div className='p-10 px-40 flex justify-center items-center'>
          <EducationAndExperience />
      </div>
    </GridBackground>
  )
}

export default page
