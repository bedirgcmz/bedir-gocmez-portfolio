import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HireMeButton() {
    const subject = encodeURIComponent('I would like to hire you!');
    const body = encodeURIComponent(
      `Hi Bedir,\n\nI have visited your portfolio and found your work very interesting. I'd like to get in touch with you.`
    );
  
    return (
      <a
        href={`mailto:bdrgcmz@gmail.com?subject=${subject}&body=${body}`}
        className="inline-block bg-[var(--color-active)] dark:bg-[var(--color-active-darker)] bg-btn-bg-hover max-xs:px-1 max-xs:py-1 flex gap-2 items-center justify-center text-white font-semibold w-[140px] px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition duration-300"
      >
        Hire Me <FontAwesomeIcon icon={faPaperPlane} className="text-xs max-w-[12px]"/>
      </a>
    );
  }
  