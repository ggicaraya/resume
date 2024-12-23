import { cn } from "@/utils/classMerge"
import React from "react"
import { socialLinks } from "@/config/contactMe"

interface FloatingButtonProps {
  className?: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ className }) => {

  const socialData = socialLinks.social

  return (
    <>
      <div className={cn(`floatingSection ${className}`)}>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content fixed top-2/3 left-0 -translate-x-0 -translate-y-2/3 z-10 bg-white animate-slideInLeft flex transition-all rounded-r-lg shadow-2xl">
            <label htmlFor="my-drawer-4" className="pl-3 pr-3 hover:pl-8 pt-4 pb-4 flex justify-between gap-2 cursor-pointer animate-pulse transition-all">
              Lets Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
            </label>

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-28 p-4 justify-center gap-4 overflow-auto">
              {
                socialData &&
                socialData.map((social, index) => {
                  const { name, icon, link } = social
                  return (
                    <li key={index} id={name} className=" flex justify-center">
                      <a href={link} target="_blank" className="block text-center mx-auto">
                        {icon}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FloatingButton