import tocbot from 'tocbot';
import { useEffect } from 'react';
import styles from './styles.module.css';

const SideMenu = () => {

    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.toc_contents',
            headingSelector: '.toc_anchor',
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
        <nav className={`toc ${styles.sideMenu}`} />
    );
};

type AnchorProps = { id: string, name: string, };
const Anchor = ({ id, name }: AnchorProps) => {
    return (
        <div id={id} className={`toc_anchor ${styles.anchor}`}>{name}</div>
    );
};

type ContentsProps = { children: React.ReactNode };

const Contents = ({ children }: ContentsProps) => {
    return (
        <div className={`toc_contents ${styles.contents}`}>
            {children}
        </div>
    );
};

export default SideMenu;

export {
    Anchor,
    Contents,
};