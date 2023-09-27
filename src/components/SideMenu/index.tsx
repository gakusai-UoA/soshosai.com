import tocbot from 'tocbot';
import { useEffect } from 'react';
import styles from './styles.module.css';

const SideMenu = () => {

    useEffect(() => {
        tocbot.init({
            tocSelector: '.' + styles.toc,
            contentSelector: '.' + styles.contents,
            headingSelector: '.' + styles.anchor,
            headingsOffset: 200,
            scrollSmoothOffset: -100,
            listClass: styles.tocList,
            listItemClass: styles.tocListItem,
            linkClass: styles.tocLink,
            activeLinkClass: styles.isActiveLink,
        })

        return () => tocbot.destroy()
    }, []);

    return (
        <div className={styles.wrapper}>
            <nav className={styles.toc} />
        </div>
    );
};

type AnchorProps = { id: string, name: string, };
const Anchor = ({ id, name }: AnchorProps) => {
    return (
        <div id={id} className={styles.anchor}>{name}</div>
    );
};

type ContentsProps = { children: React.ReactNode };

const Contents = ({ children }: ContentsProps) => {
    return (
        <div className={styles.contents}>
            {children}
        </div>
    );
};

export default SideMenu;

export {
    Anchor,
    Contents,
};