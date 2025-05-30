// About/Info.tsx
import HireMeButton from './HireMeButton';
import styles from './About.module.css';

export default function Info() {
  return (
    <div className="flex-1">
      <h1
        className={`text-3xl text-gray-600 dark:text-white md:text-5xl font-extrabold mb-6 tracking-tight transition-colors duration-300 ${
          styles.nameTitle
        }`}
      >
        Hi, I’m <span className="text-accent">Bedir Gocmez</span>
      </h1>
      <p className="text-base md:text-lg text-justify leading-relaxed mb-8 dark:text-gray-300 text-gray-700">
        I’ve been working in the IT field since 2020. After completing an 11-month FullStack Web Developer course at HiCoders,
        I started a Frontend/App Developer program in Sweden at Changemaker Education. 
        I’ve built many web-based applications, and I’m especially passionate about AI technologies and teamwork.
      </p>
      <HireMeButton />
    </div>
  );
}
