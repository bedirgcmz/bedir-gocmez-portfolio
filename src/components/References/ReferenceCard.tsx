import Image from 'next/image';
import styles from './References.module.css';

type Props = {
  name: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
};

export default function ReferenceCard({ name, role, quote, image, stars }: Props) {
  return (
    <div className='relative pt-[100px]'>
        <Image
            src={`${image}`}
            alt={`${name}'s profile`}
            width={60}
            height={60}
            className={styles.avatar}
        />
        <div className={styles.card} aria-label={`Reference from ${name}`}>
        <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
            <p className={styles.summary}>{quote}</p>
            <div className={styles.stars}>
            {Array.from({ length: stars }).map((_, i) => (
                <span key={i}>⭐</span>
            ))}
            </div>
        </div>
        </div>

    </div>
  );
}
