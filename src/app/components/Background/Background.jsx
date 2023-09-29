import Image from 'next/image';
import BackgroundImage from '@/app/assets/background.png';
import styles from './Background.module.scss';

const Background = () => (
  <div className={styles.background}>
    <Image
      src={BackgroundImage}
      alt="background"
      quality="75"
      fill
    />
  </div>
);

export default Background;
