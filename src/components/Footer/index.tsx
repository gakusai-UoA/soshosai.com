import styles from './styles.module.css';
import uoa_logo from './images/uoa_logo.jpg';
import x from './images/x_icon.svg';
import insta from './images/insta_icon.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.nav}>
                <li><a href="/forVisiter">ご来場の方へ</a></li>
                <li><a href="/aboutSponsor">ご協賛に関して</a></li>
                <li><a href="#">お問い合わせForm</a></li>
                <li><a href="/sponsor">協賛企業様紹介</a></li>
            </ul>
            <a href='https://u-aizu.ac.jp/' className={styles.uoaLogo}>
                <img src={uoa_logo.src}></img>
            </a>
            <div className={styles.sns}>
                <a href="https://x.com/soshosai" className={styles.x}>
                    <img src={x.src}></img>
                </a>
                <a href="https://www.instagram.com/uoa.gakuensai/" className={styles.insta}>
                    <img src={insta.src}></img>
                </a>
            </div>
            <div className={styles.credit}>
                <span className={styles.name}>会津大学学園祭実行委員会</span>
                <span className={styles.tel}>0242-32-0785</span>
                <span className={styles.mail}>a-gakusai@u-aizu.ac.jp</span>
            </div>
            <div className={styles.copyright}>
                © 2023 会津大学学園祭実行委員会
            </div>
        </footer>
    );
};

export default Footer