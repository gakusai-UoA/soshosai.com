import styles from './styles.module.css';
type Props = { children: string };

const Title = ({ children }: Props) => {
    return (
        <div className={styles.title}>{children}</div>
    );
};

export default Title;