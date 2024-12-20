import { cn } from "@/utils/classMerge"
import React from "react"

interface ResumeSectionProps {
  className?: string
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ className }) => {
  return (
    <>
      <div id="resumeSectionWrapper" className={cn(`section resumeSection ${className}`)}>
      resumeSection
      </div>
      <div>
        
      </div>
    </>
  )
}

export default ResumeSection