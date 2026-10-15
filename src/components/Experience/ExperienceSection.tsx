
import React from "react";
import ExperienceCard from "./ExperienceCard";
import Timeline from "./Timeline";

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="py-12 min-h-[1020px] md:min-h-[900px] px-4 md:px-16 lg:px-24 flex flex-col items-center overflow-x-hidden"
      aria-label="Professional experience timeline"
    >

    <div className="grid lg:flex lg:flex-row relative justify-center items-start gap-10 w-full min-w-0 max-xxs:ps-[55px] sm:ps-[62px] ps-[70px] md:ps-[110px]">
        {/* Left Cards */}
        <div className="contents lg:flex lg:flex-col lg:gap-36 lg:items-end lg:flex-1 lg:w-[380px] lg:min-w-0">
          <ExperienceCard
          className="order-1"
          company="Data Forte AB · Stockholm"
          role="Fullstack Developer (Consultant)"
          description="Build React and TypeScript logistics dashboards with React Query and Redux Toolkit, React Native/Expo fleet interfaces with offline and location-based workflows, and reusable Tailwind components."
          date="Aug 2025 – Present"
          iconClass="fa-solid fa-building"
          direction="left"
          delay={0.4}
          />
        
        <ExperienceCard
            className="order-3"
            company="Custellence · Stockholm"
            role="Frontend Developer Intern (LIA)"
            description="Built production B2B features with React, TypeScript, Material UI, AngularJS, and Vue.js. Integrated an AI-powered content generator while maintaining WCAG accessibility standards."
            date="Jan 2025 – Jul 2025"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.6}
            />
        </div>

        {/* Timeline */}
        <Timeline />

        {/* Right Cards */}
        <div className="contents lg:flex lg:flex-col lg:gap-36 lg:items-start lg:flex-1 lg:w-[380px] lg:min-w-0 lg:mt-[160px]">
            <ExperienceCard
            className="order-2"
            company="Boldwealth · Remote, Atlanta"
            role="Frontend Developer (Part-time)"
            description="Refactor Next.js 15 architecture with Server Components, modular client/server structures, and reusable layouts. Implement dynamic metadata and EN/TR SEO and Open Graph strategies."
            date="Jun 2025 – Present"
            iconClass="fa-solid fa-building"
            direction="right"
            delay={0.4}
            />

        <ExperienceCard
            className="order-4"
            company="Freelance · Stockholm"
            role="Frontend Developer (Freelancer)"
            description="Built and launched Parlio, a seven-language React Native app with subscriptions, offline functionality, and Supabase. Delivered Yormio, SkyEducation, SimpleTask, and Parkingtime."
            date="Sep 2022 – Aug 2026"
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
