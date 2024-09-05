import EducationAndExperience from '@/components/EducationAndExperience'
import GridBackground from '@/components/GridBackground'

const page = () => {
  return (
    <GridBackground>
      <h2 className='flex justify-center items-center text-3xl text-white p-5 z-20'>Education And Experience</h2>
      <div className='p-10 px-40 flex justify-center items-center'>
          <EducationAndExperience />
      </div>
    </GridBackground>
  )
}

export default page
