
import Info from './Info';
import Photo from './Photo';
import HireMeButton from './HireMeButton';
import styles from './About.module.css';
import CardImages from './CardImages';
import WhoIAm from './WhoIAm';
import References from '../References/References';

export default function AboutSection() {
  return (
    <section
      className={`flex flex-col items-center justify-between px-4 mt-16 max-w-[1100px] mx-auto gap-12 transition-colors duration-300 ${
        styles.aboutSection
      }`}
    >
      <WhoIAm />
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-24'>
        <Info />
        <CardImages />
      </div>
      <References />
    </section>
  );
}
