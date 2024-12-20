"use client"

import FirstFoldSection from "@/modules/firstFoldSection"
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['firstFold', 'resume', 'footer'];

  // Define the type for direction ('up' or 'down')
  const scrollToSection = (direction: 'up' | 'down') => {
    setActiveSection((prev) => {
      if (direction === 'down') {
        return Math.min(sections.length - 1, prev + 1);
      } else if (direction === 'up') {
        return Math.max(0, prev - 1);
      }
      return prev;
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        scrollToSection('down');
      } else {
        scrollToSection('up');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <>
      <FirstFoldSection className={activeSection === 0 ? 'active' : ''}/>
    </>
  )
}

