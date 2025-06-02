"use client"
import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import DividerCircle from "@/components/DividerCircle/DividerCircle";
import Educations from "@/components/Educations/Educations";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import HireMePopup from "@/components/HireMePopup/HireMePopup";
import ProjectSection from "@/components/Projects/ProjectSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSection from "@/components/Skills/Skills/SkillsSection";
import { faCode, faIdCard, faCubes, faUserGraduate, faBriefcase,faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Header />
      <HeroSection />
      <div className="max-w-[1600px] m-auto">
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
        <DividerCircle sectionId="contact"/>
        <SectionTitle text="Contact Me" icon={faEnvelope} />
        <ContactSection />
      </div>
      <Footer />
      <HireMePopup />
    </main>
  );
}
