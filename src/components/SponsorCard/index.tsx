import styles from './styles.module.css';
import placeholder from './images/placeholder.svg';

type Props = {
    img?: string,
    name: string,
    link?: string,
};

const SponsorCard = ({ img, name, link }: Props) => {
    return (
        <a href={link} data-valid={!(link == null)} className={styles.card}>
            <div className={styles.image}>
                <img src={img ?? placeholder.src}></img>
            </div>
            <span>{name}</span>
        </a>
    );
};

export default SponsorCard;