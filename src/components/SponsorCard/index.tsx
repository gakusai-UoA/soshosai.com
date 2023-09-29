import styles from './styles.module.css';

type Props = {
    children: React.ReactNode,
    link?: string,
};

const SponsorCard = ({ children, link }: Props) => {
    return (
        <a href={link} data-valid={!(link == null)} className={styles.card}>
            {children}
        </a>
    );
};

export default SponsorCard;