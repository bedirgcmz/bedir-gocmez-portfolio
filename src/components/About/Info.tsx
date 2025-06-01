import styles from './About.module.css';

export default function Info() {
  return (
    <div className="flex-1">
      <h2
        className={`text-3xl text-[#1c8288] dark:text-white md:text-3xl font-extrabold mb-6 transition-colors duration-300 ${
          styles.nameTitle
        }`}
      >
        Crafting Better Interfaces with <br />
        <span className="text-accent"> React, TypeScript, Next.js..</span>
      </h2>
      <p className="text-base md:text-lg text-justify leading-relaxed mb-8 dark:text-gray-300 text-gray-700 max-w-[670px]">
      Recently, I’ve been diving deeper into AI-assisted development and automation, while strengthening my skills in TypeScript, React, and Next.js. I believe that combining human creativity with modern tools like Tailwind CSS, component-driven architecture, and smart AI workflows leads to impactful results. I’m always eager to learn, write clean and scalable code, and collaborate on meaningful, user-focused projects
      </p>
    </div>
  );
}
