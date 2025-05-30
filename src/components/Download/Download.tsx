import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Download.module.css';


const Download = () => {
  return (
    <a
    href="/assets/Bedir-Gocmez-CV.pdf"
    download
    className={`${styles.download} flex items-center dark:text-white`}
    >
    <FontAwesomeIcon icon={faFileArrowDown} className="mr-2 h-[16px]" />
    CV
</a>
  )
}

export default Download