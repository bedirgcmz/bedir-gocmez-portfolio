
import Info from './Info';
import Photo from './Photo';
import HireMeButton from './HireMeButton';
import styles from './About.module.css';

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`flex flex-col lg:flex-row items-center justify-between px-6 pb-20 mt-16 max-w-7xl mx-auto gap-12 transition-colors duration-300 ${
        styles.aboutSection
      }`}
    >
      <Info />
      <Photo />
    </section>
  );
}
