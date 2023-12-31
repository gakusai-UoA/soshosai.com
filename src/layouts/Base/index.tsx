import styles from "./styles.module.css";

type Props = {
    children: React.ReactNode,
};

const Base = ({ children }: Props) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    );
};

export default Base;