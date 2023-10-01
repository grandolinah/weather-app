import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './Header.module.scss';

const UnitTypeSelect = dynamic(() => import('../UnitTypeSelect'), {
  ssr: false,
});

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <h1 className={styles.header__link}>Weather app</h1>
    </Link>
    <div>
      <UnitTypeSelect />
    </div>
  </header>
);


export default Header;
