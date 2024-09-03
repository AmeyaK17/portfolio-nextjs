import Card from '@/components/Card'
import { Meteors } from '@/components/ui/meteors'
import { title } from 'process'
import React from 'react'
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
    },
    {
        title: "GraphV",
        description: "Enables complex graph visualizations and customizations",
        image: GraphVImage,
        badges: ["SwiftUI", "iOS", "Algorithms"],
        newBadge: true,
    },
    {
        title: "Market Place",
        description: "Microservices backend with real-time data flow",
        image: MarketPlaceImage,
        badges: ["Java", "Spring Boot", "Apache Kafka"],
        newBadge: false,
    },
    {
        title: "MERNchies",
        description: "A food delivery app build using the MERN Stack.",
        image: MERNchiesImage,
        badges: ["React.js", "Node.js", "MongoDB", "REST API"],
        newBadge: false,
    },
    {
        title: "NachOS",
        description: "Enhaced NachOS Operating System.",
        image: NachOSImage,
        badges: ["C++", "NachOS Kernel"],
        newBadge: false,
    }
]

  return (
    <div className='h-auto bg-black flex justify-center items-center'>
        <Meteors number={100}/>
        <div className='text-center pb-20'>
            <h2 className='text-3xl text-white p-5'>Projects</h2>

            <div className='grid grid-cols-3 gap-4 p-4'>
                {projects.map((project, index) => (
                    <Card key={index} projectDetails={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default page
