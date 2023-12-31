import styles from './styles.module.css';
import img from './images/logo_img.png';
import text from './images/logo_text.svg';
import Navigation from './components/Navigation';
import Hamburger from './components/Hamburger';

type Props = {
    onClick: (expanded: boolean) => void,
};

const Header = ({ onClick }: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/" aria-label='蒼翔祭トップページを開く'>
                    <img src={img.src} className={styles.logo_img} alt='蒼翔祭ロゴ' />
                    <img src={text.src} className={styles.logo_text} alt='蒼翔祭' />
                </a>
            </div>
            <div className={styles.menu}>
                <Navigation />
            </div>
            <div className={styles.hamburger}>
                <Hamburger onClick={onClick} />
            </div>
        </header>
    );
};

export default Header;