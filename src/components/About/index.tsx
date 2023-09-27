import image from './images/slide_1.webp';
import styles from './styles.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <img src={image.src} alt="過去の蒼翔祭の様子" />
            <div className={styles.aboutBox}>
                <h1>蒼翔祭とは？</h1>
                <p>
                    蒼翔祭（そうしょうさい）は、会津大学で毎年秋期に開催される学園祭です。
                    <br />
                    例年、ゲスト企画や花火打上げといったイベントが開催されます。ステージや模擬店など、様々な企画も是非お楽しみください！
                </p>
            </div>
        </div>
    );
};

export default About