import styles from './styles.module.css';

const Navigation = () => {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.menu}>
                <div>
                    <a href="/">TOP</a>
                </div>
                <div>
                    <a href="/#events">開催イベント</a>
                </div>
                <div>
                    <a href="/forVisitor">ご来場の方へ</a>
                </div>
                <div>
                    <a href="/sponsor">ご協賛</a>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropdown_title}>お問い合わせ</div>
                    <ul>
                        <li><a href="/aboutSponsor">ご協賛に関して</a></li>
                        <li><a href="/contact">お問い合わせForm</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;