import type React from 'react';
import styles from './styles.module.css';
import trash from './images/trash.svg';
import pet from './images/pet.svg';
import cigarette from './images/cigarette.svg';

const AttensionImage = () => {
    return (
        <div className={styles.images}>
            <img src={cigarette.src}></img>
            <img src={pet.src}></img>
            <img src={trash.src}></img>
        </div>
    );
};

export default AttensionImage;