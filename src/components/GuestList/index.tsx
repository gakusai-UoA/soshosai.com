import type React from "react";
import styles from './styles.module.css';

type Props = {
    children: React.ReactNode,
};

const GuestList = ({ children }: Props) => {
    return (
        <div className={styles.guestList}>
            <h1 className={styles.title}>スペシャルゲスト</h1>
            {children}
        </div>
    );
};

export default GuestList;