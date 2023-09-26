import map from './images/map.jpg';
import styles from './styles.module.css';

const Map = () => {
    return (
        <div className={styles.map}>
            <h1>会場マップ</h1>
            <img src={map.src} alt='会場マップ'></img>
        </div>
    );
};

export default Map;