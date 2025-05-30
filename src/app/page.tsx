import AboutSection from "@/components/About/AboutSection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen pt-20">
      <Header />
      <HeroSection />
      <AboutSection />
      <h1 className="text-3xl font-bold text-primary dark:text-accent">Tema Renk Testi</h1>
    </main>
  );
}
