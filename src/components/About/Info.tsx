import styles from './About.module.css';

export default function Info() {
  return (
    <div className="flex-1">
      <h2
        className={`text-3xl text-[var(--color-active)] dark:text-white md:text-3xl font-extrabold mb-6 transition-colors duration-300 ${
          styles.nameTitle
        }`}
      >
        Crafting Better Interfaces with <br />
        <span className="text-accent"> React, Next.js & React Native</span>
      </h2>
      <p className="text-base md:text-lg text-justify leading-relaxed mb-8 dark:text-gray-300 text-gray-700 max-w-[670px]">
      My work spans real-time operational dashboards, accessible B2B features, and independently launched mobile apps. At Custellence, I helped deliver production features and an AI-powered content generator while maintaining WCAG accessibility standards. As a freelancer, I built and launched Parlio with seven languages, subscriptions, offline functionality, and Supabase integration.
      </p>
      <div aria-label="Languages" className="text-gray-700 dark:text-gray-300">
        <h3 className="font-semibold mb-3">Languages</h3>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>English · C1</li>
          <li>Swedish · B1</li>
          <li>Turkish · Native</li>
          <li>Kurdish · Native</li>
        </ul>
      </div>
    </div>
  );
}
