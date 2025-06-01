// components/ProjectCard.tsx
import styles from './ProjectCard.module.css';

type Props = {
  image: string;
  project_name: string;
  info: string;
  link: string;
  github_link: string;
};

export default function ProjectCard({ image, project_name, info, link, github_link }: Props) {
  return (
    <div className={`bg-white h-[90%] mb-auto mt-[20px] border border-[#1c8288] dark:border-white dark:bg-[#004046] rounded-lg overflow-hidden shadow-lg p-4 flex flex-col gap-4 ${styles.card}`}>
      <img
        src={`/images/projects/${image}`}
        alt={`${project_name} screenshot`}
        className="w-full max-h-[180px] object-cover rounded-md"
        loading="lazy"
      />
      <div className="flex-1 h-[140px]">
        <h3 className="text-xl font-semibold mb-2  dark:text-white">{project_name}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{info}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--color-active)] hover:underline"
        >
          Live Demo
        </a>
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--color-hover)] hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
