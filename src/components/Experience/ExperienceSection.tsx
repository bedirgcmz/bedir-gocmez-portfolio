
import React from "react";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="py-12 min-h-[1020px] md:min-h-[900px] px-4 md:px-16 lg:px-24 flex flex-col items-center overflow-x-hidden"
      aria-label="Work and teaching experiences timeline"
    >

    <div className="flex flex-col lg:flex-row relative justify-center items-start gap-10 w-full max-xxs:ps-[55px] sm:ps-[62px] ps-[70px] md:ps-[110px]">
        {/* Left Cards */}
        <div className="flex flex-col gap-8 lg:gap-36 items-end flex-1 md:w-[380px]">
          <ExperienceCard
          company="Boldwealth"
          role="Full-Stack Developer"
          description="Refactored a Next.js 15 project with server components and multilingual SEO, and continue to develop it further in my current role."
          date="Jun 2025 – Present"
          iconClass="fa-solid fa-building"
          direction="left"
          delay={0.4}
          />
        
        <ExperienceCard
            company="Freelancer"
            role="Full-Stack Developer"
            description="Built custom web & mobile apps using React, Next.js, and React Native. Delivered client projects end-to-end."
            date="Sep 2022 – Present"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.6}
            />
        </div>

        {/* Timeline */}
        <Timeline />

        {/* Right Cards */}
        <div className="flex flex-col gap-8 lg:gap-36 items-start flex-1 w-[380px] lg:mt-[160px]">
            <ExperienceCard
            company="Custellence"
            role="Product Developer (Intern)"
            description="Built AI-powered features, integrated APIs, and delivered dozens of UI/UX improvements in a live B2B React platform. All contributions are now in production."
            date="Jan 2025 – Jul 2025"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.4}
            />

        <ExperienceCard
            company="Rainbow Schools & MEM Edicational Ins."
            role="Teacher & IT Support Specialist"
            description="Led digital transformation in education; provided IT support, created learning materials, and trained staff in tech tools."
            date="Sep 2011 – Jul 2014"
            iconClass="fa-solid fa-building"
            direction="left"
            delay={0.2}
            />
        </div>
    </div>

    </section>
  );
};

export default ExperienceSection;
