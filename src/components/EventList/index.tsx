import type React from "react";
import styles from './styles.module.css';

type Props = {
    children: React.ReactNode,
};

const EventList = ({ children }: Props) => {
    return (
        <div className={styles.eventList}>
            <h1>開催イベント</h1>
            <div className={styles.cards}>
                {children}
            </div>
        </div>
    );
};

export default EventList;