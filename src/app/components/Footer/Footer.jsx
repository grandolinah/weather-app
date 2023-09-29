import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} >
      <p>Weather app &copy; {year}</p>
    </footer >
  );
};

export default Footer;
