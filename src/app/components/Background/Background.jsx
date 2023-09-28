import Image from 'next/image';
import BackgroundImage from '../../assets/background.png';
import styles from './Background.module.scss';

const Background = () => (
  <div className={styles.background}>
    <Image
      src={BackgroundImage}
      alt="background"
      quality="100"
      fill
    />
  </div>
);

export default Background;
