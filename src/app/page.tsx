import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import { LampDemo } from "@/components/ui/lamp"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

const page = () => {
  const nameText = [{text: "Ameya"}, {text: "Kale"}]

  return (
    <div className="h-lvh w-full">
      <HeroHighlight>
        <TypewriterEffect words={nameText} />
      </HeroHighlight>
    </div>
  )
}

export default page
