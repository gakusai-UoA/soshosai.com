import styles from './styles.module.css';
type Props = { children: string };

const Info = ({ children }: Props) => {
    return (
        <div className={styles.title}>{children}</div>
    );
};

export default Info;