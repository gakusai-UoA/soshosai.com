import styles from './styles.module.css';
import x from './images/x.svg';
import insta from './images/insta.svg';

type SnsType = 'x' | 'insta';

const images: Record<SnsType, ImageMetadata> = {
    x,
    insta,
};

type Props = { type: SnsType };

const SnsIcon = ({ type }: Props) => {
    return (
        <div className={`${styles.wrapper} ${styles[type]}`}>
            <img className={styles.img} src={images[type].src} alt={`${type}のアイコン`}></img>
        </div>
    );
};

export default SnsIcon;