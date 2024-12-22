import GradientBackground from "@/components/gradientBackground"
import PulsatingArrows from "@/components/pulsatingArrow"
import { cn } from "@/utils/classMerge"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

interface SecondFoldSectionProps {
  className?: string
}

const SecondFoldSection: React.FC<SecondFoldSectionProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={cn(`section secondFoldSection ${className}`)} id="secondFoldSectionWrapper" ref={sectionRef}>
      <GradientBackground
        className="px-6 lg:px-10 relative"
        colorOne="#232E30"
        colorTwo="#0E161B"
        colorThree="#162022"
      >
        <div className="absolute inset-0">
          <Image
            alt="Gian Paolo Gicaraya's Resume"
            fill
            className="object-cover w-full h-full opacity-10"
            src="/images/pexels-fauxels-3183183.jpg"
            unoptimized
            loading="lazy"
          />
        </div>

        {/* <div >
          <div className="absolute inset-0 ">
            <div 
              className={`absolute inset-0 ${isVisible ? "animate-slideInLeft opacity-100" : "animate-slideInRight opacity-0"}`}>
              <div className="block absolute top-1/2 left-[15%] -translate-x-[25%] -translate-y-[50%] border-[20px] border-[#162229] w-2/3 md:w-1/2 h-4/5 "></div>
            </div>
            <div className={`absolute inset-0 ${isVisible ? "animate-slideInRight opacity-100" : "animate-slideInLeft opacity-0"}`}>
              <div className="block absolute top-1/2 right-[15%] translate-x-[25%] -translate-y-[50%] border-[20px] border-[#162229] w-2/3 md:w-1/2 h-3/5"></div>
            </div>
          </div>
        </div> */}

        <div className={`max-w-7xl mx-auto shadow-2xl bg-slate-500/40 w-full relative z-10 py-10 md:py-20 px-6 md:px-20  ${isVisible ? "animate-slideDown opacity-100" : "animate-slideOutUp opacity-0"
                }`}>
          <div className="flex flex-col justify-between items-center text-center gap-4 md:gap-10">
            <h2
              className="text-xl md:text-4xl text-white"
            >
              Your Next Step Awaits
            </h2>
            <div className="">
              Let’s turn opportunities into achievements. <br/>Explore my journey or create something amazing together.
            </div>
            <div className="mt-10">
              <PulsatingArrows link="#thirdFoldSectionWrapper"/>
            </div>
          </div>
        </div>

      </GradientBackground>
    </div>
  )
}

export default SecondFoldSection