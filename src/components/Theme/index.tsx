import styles from './styles.module.css';

const Theme = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.theme}>
                <span className={styles.main}>cd ./UoA_30th</span>
                <span className={styles.sub}>思い出いっぱい、30年目。</span>
            </div>
            <div className={styles.intro}>
                [テーマに込めた意味などの文章。]
                (左詰め)
            </div>
        </div>
    );
};

export default Theme;