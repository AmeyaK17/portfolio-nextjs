import EducationAndExperience from '@/components/EducationAndExperience'
import GridBackground from '@/components/GridBackground'

const page = () => {
  return (
    <GridBackground>
      <div className='sticky top-0 backdrop-blur transition-colors z-40 supports-backdrop-blur:bg-white/95 dark:bg-black/75 flex justify-center items-center'>
          <h2 className='text-3xl text-white p-5'>Education and Experience</h2>
      </div>
      <div className='p-10 px-40 flex justify-center items-center'>
          <EducationAndExperience />
      </div>
    </GridBackground>
  )
}

export default page
