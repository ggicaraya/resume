import { cn } from "@/utils/classMerge";
import Image from "next/image";
import React from "react";
import { resumeData } from "@/config/resumeData";
import Link from "next/link";

interface ResumeSectionProps {
  className?: string;
}


const ResumeSection: React.FC<ResumeSectionProps> = ({ className }) => {
  const resumeSidebar = resumeData?.data?.sidebar;
  const resumeContent = resumeData?.data?.content;

  const renderData = (type: 'email' | 'phone' | 'address' | 'text', data: string) => {
    switch (type) {
      case 'email':
        return <a href={`mailto:${data}`} target="_blank" className="no-underline">{data}</a>;
      case 'phone':
        return <a href={`tel:${data}`} target="_blank" className="no-underline">{data}</a>;
      case 'address':
        return <span>{data}</span>;
      case 'text':
        return <span>{data}</span>;
      default:
        return null;
    }
  };

  return (
    <>
      <div id="resumeSectionWrapper" className={cn(`py-20 relative px-6 md:px-10 resumeSection ${className}`)}>
        <div className="absolute inset-0">
          <Image
            alt="Gian Paolo Gicaraya's Resume"
            fill
            className="object-cover w-full h-full border-8 mx-auto opacity-50"
            src="/images/concrete-wall.png"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="mb-20 max-w-5xl mx-auto flex justify-between">
          <Link href="/" className=" border-full border p-2 border-black w-auto inline-block rounded-full">
            <span className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </span>
          </Link>
          <Link href="/files/Gicaraya,GianPaolo.pdf" target="_blank" className=" border-full border p-2 border-black w-auto inline-block rounded-full">
            <span className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="mx-auto max-w-5xl w-full border bg-white border-[#333]">
          <div className="flex flex-col md:flex-row">
            <div className="basis-1/3 flex-shrink-0 flex-grow bg-slate-50">
              <div className="relative px-6 py-8">
                <span className="bg-[#524a55] left-0 right-1/2 top-0 bottom-0 w-1/2 absolute"></span>
                <div className="relative z-10">
                  <Image
                    alt="Gian Paolo Gicaraya's Resume"
                    width={300}
                    height={450}
                    className="object-contain w-full h-full border-8 mx-auto"
                    src="/images/DSC08495.jpg"
                    unoptimized
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="py-10">
                <div className="pl-6">
                  {
                    resumeSidebar && (
                      <div className="flex-col flex gap-6">
                        {
                          resumeSidebar.map((data, index) => {
                            const { heading, items, data: sectionData } = data;

                            return (
                              <div key={index} className="">
                                <div className="pb-2 border-b text-2xl font-semibold uppercase mb-4">{heading}</div>
                                {items && items.map((information, infoIndex) => {
                                  const { name, type: infoType, data: infoData } = information;
                                  return (
                                    <div key={infoIndex} className="pr-6 mb-4">
                                      <div className="font-semibold">{name}</div>
                                      {infoData.map((entry, dataIndex) => (
                                        <div key={dataIndex}>
                                          {renderData(infoType as 'email' | 'phone' | 'address' | 'text', entry.data)}
                                        </div>
                                      ))}
                                    </div>
                                  );
                                })}


                                {sectionData &&
                                  <ul className="list-disc pl-4">
                                    {
                                      sectionData.map((entry, dataIndex) => (
                                        <li key={dataIndex}>
                                          {renderData("text", entry.data)}
                                        </li>
                                      ))
                                    }
                                  </ul>
                                }
                              </div>
                            );
                          })
                        }
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="basis-2/3 flex-shrink-0 flex-grow">
              <div className="py-8 px-6">
                <div className="mb-10">
                  <h1 className="text-5xl font-bold mb-2">{resumeContent.header.name}</h1>
                  <span className="text-2xl">{resumeContent.header.title}</span>
                </div>
                <div className="mb-10">
                  <h2 className="pb-2 border-b text-2xl font-semibold uppercase mb-4">{resumeContent.profile.name}</h2>
                  <div >{resumeContent.profile.content}</div>
                </div>
                <div className="mb-10">
                  <h2 className="pb-2 border-b text-2xl font-semibold uppercase mb-4">{resumeContent.experiences.name}</h2>
                  <ul className="timeline timeline-vertical timeline-compact">
                    {
                      resumeContent.experiences.content.map((items, index) => {
                        const { date, company, title, skills } = items
                        return (
                          <li key={index}>
                            <hr />
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="timeline-end timeline-box bg-white border-0 shadow-none">
                              <div className="font-light italic text-xs">
                                {date}
                              </div>
                              <div className="text-lg">
                                {company}
                              </div>
                              <div className="font-semibold text-lg">
                                {title}
                              </div>
                              <div>
                                <ul className="flex-col flex gap-3">
                                  {
                                    skills.map((skill, skillData) => {
                                      return (
                                        <li key={skillData} className="text-sm pl-4">
                                          {skill}
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                            </div>
                            <hr />
                          </li>
                        )
                      })
                    }

                  </ul>
                </div>
                <div className="mb-10">
                  <h2 className="pb-2 border-b text-2xl font-semibold uppercase mb-4">{resumeContent.education.name}</h2>
                  <div className="font-light italic text-xs">
                    {resumeContent.education.date}
                  </div>
                  <div className="text-lg">
                    {resumeContent.education.school}
                  </div>
                  <div className="font-semibold text-lg">
                    {resumeContent.education.course}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
