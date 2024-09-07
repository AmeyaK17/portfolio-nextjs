import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import { LampDemo } from "@/components/ui/lamp"
import { LinkPreview } from "@/components/ui/link-preview"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import AmeyaImage from "../../public/profile/Ameya.jpg"
import Image from "next/image"

const page = () => {
  const nameText = [{ text: "Ameya" }, { text: "Kale" }]
  const descText = "I'm a software engineer with a Master’s degree in Computer Science and over 1.5 years of industry experience. My accolades include winning the  Apple WWDC Student Challenge 2024, and two Hackathons. I specialize in building scalable applications using technologies like Java, JavaScript, Spring Boot, React.js, and Node.js."

  return (
    <div className="h-lvh w-full flex flex-col justify-center items-center">
      <div className="w-full absolute inset-0 h-screen z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="#000000"
          minSize={1}
          maxSize={2}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#0096FF"
        />
      </div>
      
      <div className="text-white z-10">
        <TypewriterEffect words={nameText} />
      </div>
      

      <div className="z-10">
        <div className="flex">
          <div className="avatar pl-16 pt-10 pb-16">
            <div className="w-64 rounded-full shadow-[0_0_15px_5px_rgba(148,163,184,0.5)] shadow-sky-700 border-2 border-sky-500">
              <Image src={AmeyaImage} alt="Ameya Image"/>
            </div>
          </div>
          <div>
            
            <div className="px-20 pt-20 pb-16 text-center flex justify-center items-center">
              <TextGenerateEffect words={descText} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <h2 className="flex justify-center items-center p-3 text-white">Chect out my profiles below:</h2>

        <div className="flex gap-4 justify-center items-center p-3">
        <LinkPreview url="https://www.linkedin.com/in/ameyakale/" className="h-10 w-40 border rounded-full p-2 flex flex-row justify-center items-center border-linkedinColor hover:bg-linkedinColor hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="#ffffff"  stroke="currentColor">
              <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
          </svg>
            <p className="ml-2">LinkedIn</p>
          </LinkPreview>

          <LinkPreview url="https://github.com/AmeyaK17/" className="h-10 w-40 border rounded-full p-2 flex flex-row justify-center items-center border-githubColor hover:bg-githubColor hover:text-black">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>

            <p className="ml-2">Github</p>
          </LinkPreview>
          
          <LinkPreview url="https://leetcode.com/u/AmeyaK17/" className="h-10 w-40 border rounded-full p-2 flex flex-row justify-center items-center border-leetcodeColor hover:bg-leetcodeColor hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13h7.5" />
              <path d="M9.424 7.268l4.999 -4.999" />
              <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
            </svg>

            <p className="ml-2">LeetCode</p>
          </LinkPreview>

          <LinkPreview url="https://www.geeksforgeeks.org/user/ameyakkale/" className="h-10 w-44 border rounded-full p-2 flex flex-row justify-center items-center border-gfgColor hover:bg-gfgColor hover:text-black">
          <svg fill="#ffffff" width={24} height={24} viewBox="0 0 24.00 24.00" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path></g></svg>

            <p className="ml-2">GeeksForGeeks</p>
          </LinkPreview>

          <LinkPreview url="https://drive.google.com/file/d/1LlY3pUdyvmjFpZ7zS782T60pteoul9y-/view?usp=drive_link" className="h-10 w-44 border rounded-full p-2 flex flex-row justify-center items-center border-white hover:bg-white group">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-file-text group-hover:text-black"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>

            <p className="ml-2 group-hover:text-black">Resume</p>
          </LinkPreview>
          
        </div>
      </div>
    </div>
  )
}

export default page
