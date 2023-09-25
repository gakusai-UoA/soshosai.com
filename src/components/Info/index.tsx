import styles from './styles.module.css';
type Props = { children: string };

const Info = ({ children }: Props) => {
    return (
        <div className={styles.info}>{children}</div>
    );
};

export default Info;