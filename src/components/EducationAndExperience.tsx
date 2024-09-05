import React from 'react'
import Image from "next/image";
import SUImage from '../../public/EducationAndExperience/SU.png'
import USTImage from '../../public/EducationAndExperience/ust.jpg'

const EducationAndExperience = () => {
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle p-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#EA580C"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-white">Aug 2022 - May 2024</time>
                        <div className="text-lg font-black text-orange-600">Syracuse University</div>
                        <div className="text-s font-black text-orange-600">Master&apos;s Degree in Computer Science</div>
                        <p className='text-white'>Coursework: Data Structures & Algorithms, Object Oriented Design, DBMS, Operating Systems, Data Science, iOS Development</p>
                    </div>
                    <div className="timeline-end mb-10 md:text-end flex justify-center items-center">
                        <div className='h-5 w-40'>
                            <Image src={SUImage} alt='SU Image' />
                        </div>
                    </div>
                    <hr className='bg-orange-600'/>
                </li>
                <li>
                    <hr className='bg-orange-600'/>
                    <div className="timeline-middle p-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#38BDF8"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic text-white">Jan 2022 - July 2022</time>
                        <div className="text-lg font-black text-sky-400">Software Engineer</div>
                        <div className="text-s font-black text-sky-400">UST Global</div>
                        <p className='text-white'>Improved user experience by 25% through developing reusable React.js components, enhancing code maintainability for a large-scale project at IHG Hotels and Resorts. Reduced server response time by 30% by implementing RESTful APIs in Node.js and caching. Increased system reliability by deploying and maintaining 3 production builds, ensuring on-time releases.</p>
                    </div>
                    <div className="h-auto w-40 timeline-start mb-10 md:text-end">
                        <Image src={USTImage} alt='UST Image' />
                    </div>
                    <hr className='bg-sky-400'/>
                </li>
                <li>
                    <hr className='bg-sky-400'/>
                    <div className="timeline-middle p-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#38BDF8"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-white">Jul 2021 - Jan 2022</time>
                        <div className="text-lg font-black text-sky-400">Trainee Software Engineer</div>
                        <div className="text-s font-black text-sky-400">UST Global</div>
                        <p className='text-white'>Reduced build time by 30% by engineering a POC website with React.js and Node.js, utilizing reusable components and optimizing data management with database integration and REST APIs. Cut deployment costs by 15% through analysis of AWS cloud services, enhancing overall development efficiency. Accelerated build, test, and deployment processes by optimizing CI/CD pipelines with Jenkins.</p>
                    </div>
                    <div className="timeline-end mb-10 md:text-end">
                        <div className='h-5 w-40'>
                            <Image src={USTImage} alt='UST Image' />
                        </div>
                    </div>
                    <hr className='bg-sky-400'/>
                </li>
                <li>
                    <hr className='bg-sky-400'/>
                    <div className="timeline-middle p-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#38BDF8"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic text-white">Feb 2021 - May 2021</time>
                        <div className="text-lg font-black text-sky-400">Software Engineer Intern</div>
                        <div className="text-s font-black text-sky-400">UST Global</div>
                        <p className='text-white'>Increased user engagement by 30% by developing a Java Spring Boot web application with robust database connectivity. Ensured efficient real-time data flow and responsiveness by engineering and deploying REST APIs.</p>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <div className='h-5 w-40'>
                            <Image src={USTImage} alt='UST Image' />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default EducationAndExperience
