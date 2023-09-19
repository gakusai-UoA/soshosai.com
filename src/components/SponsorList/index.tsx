import styles from './styles.module.css';

type Props = { children: React.ReactNode };

const SponsorList = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.center}>
                順不同、敬称略
            </div>
            <div className={styles.list}>
                {children}
            </div>
        </div>
    );
};

export default SponsorList;