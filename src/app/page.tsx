"use client"
import React, { useState, useEffect } from 'react';
import FirstFoldSection from "@/modules/firstFoldSection"
import FloatingButton from "@/components/floatingButton";
import SecondFoldSection from "@/modules/secondFoldSection";
import ThirdFoldSection from "@/modules/thirdFoldSection";
import FourthFoldSection from "@/modules/fourthFoldSection";

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
      <SecondFoldSection className={activeSection === 1 ? 'active' : ''}/>
      <ThirdFoldSection className={activeSection === 2 ? 'active' : ''}/>
      <FourthFoldSection className={activeSection === 3 ? 'active' : ''}/>
      <FloatingButton />
    </>
  )
}

