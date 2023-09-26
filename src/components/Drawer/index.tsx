import styles from './styles.module.css';
import SnsIcon from '../SnsIcon';

type Props = { opened: boolean };

const Drawer = ({ opened }: Props) => {
    return (
        <div className={styles.menu} aria-hidden={!opened}>
            <div className={styles.menuBox}>
                <a href="/">TOP</a>
                <a href="/forVisitor">ご来場の方へ</a>
                <a href="/sponsor">ご協賛</a>
                <div className={styles.bar}>お問い合わせ</div>
                <a href="/aboutSponsor">ご協賛に関して</a>
                <a href="https://forms.gle/b5rUZo4kEdD31c8m8">お問い合わせForm</a>
            </div>
            <div className={styles.snslinkBox}>
                <ul>
                    <li>
                        <a href="https://x.com/soshosai" target="_blank">
                            <span className={styles.icon}>
                                <SnsIcon type='x' />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/uoa.gakuensai/" target="_blank">
                            <span className={styles.icon}>
                                <SnsIcon type='insta' />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Drawer;