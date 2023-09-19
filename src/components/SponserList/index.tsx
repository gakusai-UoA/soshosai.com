import styles from './styles.module.css';

type Props = { children: React.ReactNode };

const SponserList = ({ children }: Props) => {
    return (
        <div className={styles.list}>
            {children}
        </div>
    );
};

export default SponserList;