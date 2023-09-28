import styles from './styles.module.css';
import follow_us from './images/follow_us.svg';
import SnsIcon from '../SnsIcon';

const Sns = () => {
    return (
        <div className={styles.sns}>
            <img src={follow_us.src} className={styles.followUs} alt='follow us'></img>
            <div className={styles.message}>
                活動の様子や<br />
                学園祭の情報を<br />
                発信しています！
            </div>
            <div className={styles.links}>
                <a href="https://x.com/soshosai" className={styles.x}>
                    <span className={styles.icon}>
                        <SnsIcon type='x' />
                    </span>
                    <span className={styles.address}>@soshosai</span>
                </a>
                <a href="https://www.instagram.com/uoa.gakuensai/" className={styles.insta}>
                    <span className={styles.icon}>
                        <SnsIcon type='insta' />
                    </span>
                    <span className={styles.address}>uoa.gakuensai</span>
                </a>
            </div>
        </div>
    );
};

export default Sns;