import React from "react";
import styles from "./styles.module.css";

type Props = {
    children: React.ReactNode,
};

const Column = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Column;
