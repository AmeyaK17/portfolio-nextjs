import React from 'react'
import {IconMail, IconPhone, IconBrandLinkedin} from "@tabler/icons-react";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from "next/image";
import AmeyaAppleParkOutsideImage from "../../../public/profile/AmeyaAppleParkOutside.jpeg"
import AppleWWDCIDCardImage from "../../../public/profile/AppleIDCard.jpeg"
import AtlantaImage from "../../../public/profile/atlanta.jpeg"
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import Link from 'next/link';
import { LinkPreview } from '@/components/ui/link-preview';

const page = () => {
    const content = [
        {
          title: "Ameya Kale",
          description:
            "My approach to software development focuses on enhancing the end user's experience and making a positive impact. I have participated in and won several coding competitions, including hackathons, which have deepened my expertise and strengthened my foundational knowledge.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              <Image
                src={AmeyaAppleParkOutsideImage}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
            title: "Yes, the photo is from Apple Park!",
            description:
              "In June 2024, I had the privilege of being invited by Apple to attend their WWDC event at Apple Park. It was an incredible experience, giving me the chance to engage in software discussions with Apple engineers and industry experts.",
            content: (
              <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                  src={AppleWWDCIDCardImage}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                />
              </div>
            ),
          },
        {
          title: "Location and Opportunities",
          description:
            "I am currently based in Atlanta, GA, USA, and am actively seeking software development opportunities across the United States. I am also open to relocation.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src={AtlantaImage}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Contact Me",
          description:"If you like my work, or would like to know more about me, feel free to reach out! P.S. I love coffee ☕️! ",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <div className='flex flex-col'>
                    <Link href="mailto:kale.ameya17@gmail.com" className="flex items-center p-2 hover:underline hover:underline-offset-2">
                        <IconMail className='mr-2'/> kale.ameya17@gmail.com
                    </Link>
                    
                    <Link href="tel:+13159527613" className="flex items-center p-2 hover:underline hover:underline-offset-2">
                        <IconPhone className='mr-2'/> +1 (315) 952-7613
                    </Link>
                    
                    <LinkPreview url="https://www.linkedin.com/in/ameyakale/" className="flex items-center p-2">
                        <IconBrandLinkedin className='mr-2'/> /ameyakale
                    </LinkPreview>
                </div>
            </div>
          ),
        },
        {
            title: "",
            description: "",
            content: (
              <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                
              </div>
            ),
          },
      ];

  return (
    <BackgroundBeamsWithCollision>
        <div className='h-screen w-screen bg-black flex-row justify-center items-center'>
        <div className='sticky top-0 backdrop-blur transition-colors flex justify-center items-center z-40 supports-backdrop-blur:bg-white/95 dark:bg-black/75'>
                <h2 className='text-3xl text-white p-5'>About Me</h2>
            </div>
            <StickyScroll content={content}/>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default page
