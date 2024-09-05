'use client'

import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import {
    IconUser,
    IconHome,
    IconPencilCode,
    IconBriefcase2,
    IconTrophy,
  } from "@tabler/icons-react";

const Dock = () => {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/",
        },
     
        {
          title: "Education and Experience",
          icon: (
            <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/educationAndExperience",
        },
        {
          title: "Projects",
          icon: (
            <IconPencilCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/projects",
        },
        {
          title: "Achievements",
          icon: (
            <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/achievements",
        },
        {
          title: "About Me",
          icon: (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "aboutMe",
        },
      ];

  return (
    <div className='fixed bottom-2.5 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20'>
      <FloatingDock items={links}/>
    </div>
  )
}

export default Dock
