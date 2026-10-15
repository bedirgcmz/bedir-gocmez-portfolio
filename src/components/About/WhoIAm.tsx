import Image from 'next/image';
import styles from './About.module.css';

const strengths = [
  {
    title: 'Product Thinking',
    text: 'I care about the user flow, the business goal, and the tiny interaction details that make software feel trustworthy.',
  },
  {
    title: 'Full-Stack Delivery',
    text: 'I build web and mobile applications with React and React Native, connect REST APIs and Supabase, and take products through deployment.',
  },
  {
    title: 'Clear Collaboration',
    text: 'I work with Swedish and international Agile teams through code reviews, reusable components, and production releases.',
  },
];

export default function WhoIAm() {

  return (
    <section
      aria-labelledby="who-i-am-heading"
      className={`w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mx-auto mb-12 text-gray-700 dark:text-gray-300 transition-colors duration-300 ${styles.whoIAm}`}
    >
      <div className={styles.portraitWrap}>
        <Image src={"/images/global/who-i-am.jpg"} alt='Bedir Gocmez' width={260} height={330} className={styles.aboutPortrait}/>
      </div>
        <div className={`max-w-[720px] relative ${styles.aboutCopy}`}>
            <p className={styles.aboutKicker}>Beyond the code</p>
            <h2
                id="who-i-am-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-active)] dark:text-white z-[2]"
            >
                I build like a developer, think like a product teammate.
            </h2>
            <p className="text-base md:text-lg leading-relaxed z-[2] text-justify">
                I&#39;m a Full-Stack Developer based in Stockholm, building production web and mobile applications with React, Next.js, TypeScript, and React Native. At Data Forte AB, I develop logistics dashboards and cross-platform fleet and delivery interfaces. I also work part-time at Boldwealth on Next.js architecture and multilingual SEO. My background in education brings clear communication, empathy, and a focus on the people using what I build.
            </p>
            <div className={styles.strengthGrid}>
              {strengths.map((strength) => (
                <article key={strength.title}>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </article>
              ))}
            </div>
        </div>
    </section>
  );
}
