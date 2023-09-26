import styles from './styles.module.css';

const Theme = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.theme}>
                <span className={styles.main}>cd ./UoA_30th</span>
                <span className={styles.sub}>思い出いっぱい、30年目。</span>
            </div>
            <div className={styles.intro}>
                <div>今年度蒼翔祭のテーマは<br />「cd ./UoA_30th 思い出いっぱい、30年目」です。</div>
                <div>cd ./UoA_30th とは、ターミナルのコマンドでディレクトリ「UoA_30th」に移動していることを意味しており、会津大学の世代が変わったことを意味しています。</div>
                <div>このテーマには、今年度で30年目を迎える本学がこれからも思い出と記録を残し続けたいという想いが込められております。</div>
                <div>世代が変わり新しくなった会津大学と学園祭である蒼翔祭をお楽しみください。</div>
            </div>
        </div>
    );
};

export default Theme;