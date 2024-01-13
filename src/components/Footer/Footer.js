import { Grid } from "@mui/material";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container justifyContent="space-between" alignItems="center">
        <p>Copyright © {new Date().getFullYear()} Fleet Management. All rights reserved.</p>
      </Grid>
    </footer>
  );
};

export default Footer;
