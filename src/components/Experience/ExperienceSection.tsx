
import React from "react";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="py-12 min-h-[1200px] px-4 md:px-16 lg:px-24 flex flex-col items-center"
      aria-label="Work and teaching experiences timeline"
    >

    <div className="flex flex-col lg:flex-row relative justify-center items-start gap-10 w-full  ps-[110px] pd:ms-0">
        {/* Left Cards */}
        <div className="flex flex-col gap-8 lg:gap-36 items-end flex-1 w-[380px]">
        
            <ExperienceCard
            company="Custellence"
            role="Frontend Developer (Intern)"
            description="Built AI-powered features, integrated APIs, and delivered dozens of UI/UX improvements in a live B2B React platform. All contributions are now in production."
            date="Jan 2025 – Jul 2025"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.4}
            />
            <ExperienceCard
            company="Futuregames"
            role="Frontend / App Developer"
            description="Built apps with React, TypeScript, Tailwind & Next.js. Used Agile methods and CMS tools."
            date="Jan 2023 – Jul 2025"
            iconClass="fa-solid fa-building"
            direction="left"
            delay={0.4}
            />
        </div>

        {/* Timeline */}
        <Timeline />

        {/* Right Cards */}
        <div className="flex flex-col gap-8 lg:gap-36 items-start flex-1 w-[380px] lg:mt-[160px]">
            <ExperienceCard
            company="Freelancer"
            role="Frontend Developer"
            description="Built custom web & mobile apps using React, Next.js, and React Native. Delivered client projects end-to-end."
            date="Sep 2022 – Present"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.6}
            />
        <ExperienceCard
            company="Rainbow Schools & MEM Edicational Ins."
            role="Teacher"
            description="Managed classrooms, supported student literacy & family communication in primary education."
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
