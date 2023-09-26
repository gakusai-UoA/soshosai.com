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
            <div>
                ※出演者は予告なしに変更となる場合もございます。予めご了承くださいませ。
            </div>
        </div>
    );
};

export default GuestList;