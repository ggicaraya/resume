import { cn } from "@/utils/classMerge"
import React from "react"

interface FooterSectionProps {
  className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ className }) => {
  return (
    <>
      <div className={cn(`section footerSection ${className}`)}>
        footerSection
      </div>
      <div>

      </div>
    </>
  )
}

export default FooterSection