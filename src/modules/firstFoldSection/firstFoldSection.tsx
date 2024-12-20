import GradientBackground from "@/components/gradientBackground"
import PulsatingArrows from "@/components/pulsatingArrow"
import { cn } from "@/utils/classMerge"
import Image from "next/image"
import React from "react"

interface FirstFoldSectionProps {
  className?: string
}

const FirstFoldSection: React.FC<FirstFoldSectionProps> = ({ className }) => {
  return (
    <div className={cn(`section firstFoldSection ${className}`)}>
      <GradientBackground className="px-6 lg:px-10 relative">
        <div className="absolute inset-0">
          <Image
            alt="Gian Paolo Gicaraya's Resume"
            fill
            className="object-cover w-full h-full opacity-10"
            src="/images/firstFoldBG.png"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="bg-[#162022] p-6 rounded-t-3xl w-full max-w-3xl -mb-6">
          <span></span>
        </div>
        <div className="flex flex-col max-w-3xl rounded-b-3xl px-6 py-6 relative overflow-hidden bg-[#0E161B]">
          <div>
            <div className="flex justify-end relative z-10 -mr-2 sm:mr-0 -mt-5">
              <div className="flex gap-3 flex-col sm:flex-row">
                <a href="https://m.me/gian.gicaraya?hash=AbZ3qt91NOnxS25j&source=qr_link_share" className="p-1 md:p-2 rounded-full border-white border md:border-2">
                  <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-3 sm:w-6 h-3 sm:h-6">
                    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                      <g id="Social-Icons---Isolated" transform="translate(-276.000000, -1287.000000)" fill="currentColor">
                        <path d="M300,1287 C286.745143,1287 276,1296.94919 276,1309.22222 C276,1316.21556 279.489988,1322.45348 284.944099,1326.52696 L284.944099,1335 L293.115876,1330.51511 C295.296745,1331.11867 297.607155,1331.44444 300,1331.44444 C313.254857,1331.44444 324,1321.49526 324,1309.22222 C324,1296.94919 313.254857,1287 300,1287 L300,1287 Z M302.385093,1316.92593 L296.273292,1310.40741 L284.347826,1316.92593 L297.465839,1303 L303.726708,1309.51852 L315.503106,1303 L302.385093,1316.92593 L302.385093,1316.92593 Z" id="Messenger"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="https://m.me/gian.gicaraya?hash=AbZ3qt91NOnxS25j&source=qr_link_share" className="p-1 md:p-2 rounded-full border-white border md:border-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 sm:w-6 h-3 sm:h-6" strokeLinejoin="round">
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-[#162022] p-6 absolute w-1/3 right-0 top-0"> <span></span></div>
            <div className="rounded-t-3xl bg-[#0E161B] p-8 absolute w-1/3 right-1/3 -mr-12 top-0"> <span></span></div>
            <div className="rounded-b-3xl bg-[#162022] p-2 absolute w-1/3 -right-12 top-12"> <span></span></div>
          </div>
          <div className="flex flex-row items-center gap-3 md:gap-6 relative mb-8 md:mb-20 max-w-[80%]">
            <div className="avatar online">
              <div className="relative h-20 md:h-40 max-w-40 w-full mx-auto rounded-full">
                <Image
                  alt="Gian Paolo Gicaraya's Resume"
                  fill
                  className="object-cover w-full h-full"
                  src="/images/DSC08497.jpg"
                  unoptimized
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h1 className="text-lg md:text-3xl leading-tight font-bold text-left">
                Gian Paolo G. Gicaraya
              </h1>
              <div className="text-xs md:text-lg leading-normal text-left">
                Front-end web developer
              </div>
            </div>
          </div>

          <div className="">
            <div className="chat chat-start">
              <div className="chat-bubble shadow-lg bg-[#1E3A8A] text-white text-left">
                Hi there! I'm Gian Paolo Gicaraya, a versatile front-end web developer who thrives on tackling challenges head-on.
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble shadow-lg bg-[#1E3A8A] text-white text-left">Quick to adapt, eager to learn—let’s create something amazing together!</div>
            </div>
          </div>

          <div className="mt-10">
            <PulsatingArrows />
          </div>
        </div>
      </GradientBackground>
    </div>
  )
}

export default FirstFoldSection