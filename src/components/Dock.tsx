'use client'

import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconBriefcase2,
    IconBrandLeetcode,
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
          title: "Components",
          icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "LeetCode",
          icon: (
            <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://leetcode.com/u/AmeyaK17/",
        },
        {
          title: "Changelog",
          icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];

  return (
    <div className='fixed bottom-2.5 left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
      <FloatingDock items={links}/>
    </div>
  )
}

export default Dock
