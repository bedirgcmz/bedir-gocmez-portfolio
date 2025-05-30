import Link from 'next/link';
import styles from './Header.module.css';

type Props = {
  navItems: string[];
  activeHash: string;
  onClick?: () => void;
};

export function renderNavLinks({ navItems, activeHash, onClick }: Props) {
  return navItems.map((item) => {
    const hash = `#${item.toLowerCase()}`;
    return (
      <li key={item}>
        <Link
          href={hash}
          onClick={onClick}
          className={`${styles.navItem} ${activeHash === hash ? styles.active : ''}`}
        >
          {item}
        </Link>
      </li>
    );
  });
}
