import { BackgroundBeams } from '@/components/ui/background-beams'
import { FocusCards } from '@/components/ui/focus-cards';
import React from 'react'

const page = () => {
    const achievements = [
        {
          title: "Winner of Apple WWDC Swift Student Challenge 2024",
          src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Participated in Google Gemini Developer Contest",
            src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "1st Prize in National Smart India Hackathon",
          src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "1st Prize in Xperiments Hackathon conducted by UST Global",
          src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Best Junior Year Project",
          src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
  return (
    <div className=" h-full w-full overflow-hidden">
      <div className="relative z-10">
        <div className='sticky top-0 backdrop-blur transition-colors flex justify-center items-center z-40 supports-backdrop-blur:bg-white/95 dark:bg-black/75'>
            <h2 className='text-3xl text-white p-5'>Achievements</h2>
        </div>
        
        <div className='flex justify-center items-center p-5'>
            <FocusCards cards={achievements} />
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </div>
  )
}

export default page
