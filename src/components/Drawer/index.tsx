import styles from './styles.module.css';
import x from './images/x.svg';
import insta from './images/insta.svg';

type Props = { opened: boolean };

const Drawer = ({ opened }: Props) => {
    return (
        <div className={styles.menu} aria-hidden={!opened}>
            <div className={styles.menuBox}>
                <a href="/">TOP</a>
                <a href="/forVisitor">ご来場の方へ</a>
                <a href="/sponsor">ご協賛</a>
                <div className={styles.bar}>お問い合わせ</div>
                <a href="aboutSponsor">ご協賛に関して</a>
                <a href="contact">お問合せForm</a>
            </div>
            <div className={styles.snslinkBox}>
                <ul>
                    <li>
                        <a href="https://x.com/soshosai" target="_blank">
                            <img src={x.src} className={styles.x}></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/uoa.gakuensai/" target="_blank">
                            <img src={insta.src} className={styles.insta}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Drawer;