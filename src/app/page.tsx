import AboutSection from "@/components/About/AboutSection";
import DividerCircle from "@/components/DividerCircle/DividerCircle";
import Educations from "@/components/Educations/Educations";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSection from "@/components/Skills/Skills/SkillsSection";
import { faCode, faIdCard, faCubes, faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen pt-20">
      <Header />
      <HeroSection />
      <DividerCircle sectionId="about"/>
      <SectionTitle text="About Me" icon={faIdCard} />
      <AboutSection />
      <DividerCircle sectionId="skills"/>
      <SectionTitle text="What I Bring - Skills" icon={faCode} />
      <SkillsSection />
      <DividerCircle sectionId="projects"/>
      <SectionTitle text="Some of My Projects" icon={faCubes} />
      <ProjectSection />
      <DividerCircle sectionId="experiences"/>
      <SectionTitle text="What I’ve Built & Shipped" icon={faBriefcase} />
      <ExperienceSection />
      <DividerCircle sectionId="educations"/>
      <SectionTitle text="What I’ve Learned" icon={faUserGraduate} />
      <Educations />
      <h1 className="text-3xl font-bold text-primary dark:text-accent h-40">Tema Renk Testi</h1>
    </main>
  );
}
