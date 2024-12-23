import GradientBackground from "@/components/gradientBackground"
import { cn } from "@/utils/classMerge"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

interface FourthFoldSectionSectionProps {
  className?: string
}

const FourthFoldSection: React.FC<FourthFoldSectionSectionProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefFour = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRefFour.current; // Capture the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the captured ref value in cleanup
      }
    };
  }, [])

  return (
    <div className={cn(`section secondFoldSection ${className}`)} id="thirdFoldSectionWrapper" ref={sectionRefFour}>
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
            src="/images/pexels-markusspiske-2004161.jpg"
            unoptimized
            loading="lazy"
          />
        </div>

        <div >
          <div className="absolute inset-0 ">
            <div
              className={`absolute inset-0 ${isVisible ? "animate-slideInLeft opacity-100" : "animate-slideInRight opacity-0"}`}>
              <div className="block absolute top-1/2 left-[15%] -translate-x-[25%] -translate-y-[50%] border-[20px] border-[#162229] w-2/3 md:w-1/2 h-3/5 "></div>
            </div>
            <div className={`absolute inset-0 ${isVisible ? "animate-slideInRight opacity-100" : "animate-slideInLeft opacity-0"}`}>
              <div className="block absolute top-1/2 right-[15%] translate-x-[25%] -translate-y-[50%] border-[20px] border-[#162229] w-2/3 md:w-1/2 h-4/5"></div>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto shadow-2xl bg-slate-500/60 w-full relative z-10 ${isVisible ? "animate-slideDown opacity-100" : "animate-slideOutUp opacity-0"
          }`}>
          <div className="flex flex-col md:flex-row px-6 md:gap-10 realtive">
            
            <div className="basis-1/2 md:relative transition-all">
              <div className="absolute inset-0 block w-full md:h-[120%] md:-mt-[5%] md:-mr-[5%]">
                <div className="block md:hidden absolute inset-0 bg-black/40 z-10">
                </div>
                <Link href="/resume" >
                  <div className="stack">
                    <Image
                      src="/images/pexels-kevin-ku-92347-577585.jpg"
                      fill
                      alt="Gian Paolo Gicaraya's Resume"
                      className="-right-[10%] shadow-2xl object-cover w-full h-full"
                    />
                    <Image
                      src="/images/pexels-kevin-ku-92347-577585.jpg"
                      fill
                      alt="Gian Paolo Gicaraya's Resume"
                      className="-right-[10%] shadow-2xl"
                    />
                    <Image
                      src="/images/pexels-kevin-ku-92347-577585.jpg"
                      fill
                      alt="Gian Paolo Gicaraya's Resume"
                      className="-right-[10%] shadow-2xl"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start text-left gap-4 basis-1/2 py-10 md:py-20 md:pl-4 relative z-20">
              <h2
                className="text-xl md:text-4xl text-white text-center md:text-left block w-full"
              >
                Dive Into My World
              </h2>
              <div className="text-center  md:text-left">
                Visit my personal website for more about my passions, side projects, and the stories behind my work.
              </div>
              <div className="flex justify-center w-full md:justify-start">
                <Link href="#" className="flex flex-row justify-center md:justify-end items-center transition-all bg-white py-3 pl-4 md:hover:pl-10 pr-4 text-slate-800 text-sm gap-3 font-bold">
                  <span>Know more about me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </GradientBackground>
    </div>
  )
}

export default FourthFoldSection