import styles from "./styles.module.css";

type Props = { children: React.ReactNode };

const TopView = ({ children }: Props) => {
    return (
        <div className={styles.top}>
            {children}
        </div>
    );
};

export default TopView;