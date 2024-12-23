import Link from 'next/link';
import React from 'react';

interface PulsatingArrowProps {
  link?: string
}

const PulsatingArrows:React.FC<PulsatingArrowProps> = ({link = "#"}) => {

  return (
    <Link href={link} className="flex flex-col justify-center items-center gap-1">
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-2 w-2 text-white transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </Link>
  );
};

export default PulsatingArrows;
