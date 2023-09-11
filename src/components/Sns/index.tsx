import styles from './styles.module.css';
import follow_us from './images/follow_us.svg';
import message from './images/message.svg';
import x from './images/x_icon.svg';
import insta from './images/insta_icon.svg';

const Sns = () => {
    return (
        <div className={styles.sns}>
            <img src={follow_us.src} className={styles.followUs}></img>
            <img src={message.src} className={styles.message}></img>
            <div className={styles.links}>
                <a href="https://x.com/soshosai" className={styles.x}>
                    <img src={x.src}></img>
                    <span className={styles.address}>@soshosai</span>
                </a>
                <a href="https://www.instagram.com/uoa.gakuensai/" className={styles.insta}>
                    <img src={insta.src}></img>
                    <span className={styles.address}>uoa.gakuensai</span>
                </a>
            </div>
        </div>
    );
};

export default Sns;