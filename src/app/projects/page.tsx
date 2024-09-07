import Card from '@/components/Card'
import { Meteors } from '@/components/ui/meteors'
import { title } from 'process'
import React from 'react'
import Link from 'next/link';
import GeminiMateImage from "../../../public/projects/GeminiMate.png"
import GraphVImage from "../../../public/projects/GraphV.png"
import MarketPlaceImage from "../../../public/projects/MarketPlace.png"
import MERNchiesImage from "../../../public/projects/MERNchies.png"
import NachOSImage from "../../../public/projects/NachOS.png"


const page = () => {
const projects = [
    {
        title: "GeminiMate",
        description: "WebApp that leverages Google Gemini through dynamic visualization features.",
        image: GeminiMateImage,
        badges: ["Next.js", "Firebase", "Google Gemini LLM API"],
        newBadge: true,
        link: "",
    },
    {
        title: "GraphV",
        description: "Enables complex graph visualizations and customizations",
        image: GraphVImage,
        badges: ["SwiftUI", "iOS", "Algorithms"],
        newBadge: true,
        link: "https://github.com/AmeyaK17/GraphV",
    },
    {
        title: "Market Place",
        description: "Microservices backend with real-time data flow",
        image: MarketPlaceImage,
        badges: ["Java", "Spring Boot", "Apache Kafka"],
        newBadge: false,
        link: "https://github.com/AmeyaK17/Market-Place-Microservices",
    },
    {
        title: "MERNchies",
        description: "A food delivery app build using the MERN Stack.",
        image: MERNchiesImage,
        badges: ["React.js", "Node.js", "MongoDB", "REST API"],
        newBadge: false,
        link: "https://github.com/AmeyaK17/MERNchies",
    },
    {
        title: "NachOS",
        description: "Enhaced NachOS Operating System.",
        image: NachOSImage,
        badges: ["C++", "NachOS Kernel"],
        newBadge: false,
        link: "https://github.com/AmeyaK17/NachOS",
    }
]

  return (
    <div className='h-auto bg-black flex justify-center items-center'>
        <Meteors number={100}/>
        <div className='text-center pb-20'>
            <div className='sticky top-0 backdrop-blur transition-colors flex justify-center items-center z-40 supports-backdrop-blur:bg-white/95 dark:bg-black/75'>
                <h2 className='text-3xl text-white p-5'>Projects</h2>
            </div>

            <div className='grid grid-cols-3 gap-4 p-4'>
                {projects.map((project, index) => (
                    <Link key={index} href={project.link}>
                        <Card projectDetails={project} />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
export default page


// sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] 