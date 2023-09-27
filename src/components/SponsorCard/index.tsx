import styles from './styles.module.css';

type Props = {
    name: string,
    link?: string,
};

const SponsorCard = ({ name, link }: Props) => {
    return (
        <a href={link} data-valid={!(link == null)} className={styles.card}>
            {name}
        </a>
    );
};

export default SponsorCard;