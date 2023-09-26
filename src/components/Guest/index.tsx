import type React from "react";
import placeholder from './images/placeholder.png';
import styles from './styles.module.css';

type Props = {
    img?: string,
    name: React.ReactNode,
    children: React.ReactNode,
};

const Guest = ({ img, name, children }: Props) => {
    if (img == null) {
        img = placeholder.src;
    }

    return (
        <div className={styles.guest}>
            <img src={img} alt={`${name}の画像`}></img>
            <div className={styles.text}>
                <h1>{name}</h1>
                <div className={styles.info}>{children}</div>
            </div>
        </div>
    );
};

export default Guest;