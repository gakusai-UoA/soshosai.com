import on from './images/on.svg';
import off from './images/off.svg';
import styles from './styles.module.css';
import { useState } from 'react';

type Props = { onClick: (expanded: boolean) => void };

const Hamburger = ({ onClick }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        onClick(!expanded);
        setExpanded(expanded => !expanded);
    };
    return (
        <button type="button" className={styles.button} aria-expanded={expanded} onClick={toggle}>
            <img src={on.src} className={styles.on}></img>
            <img src={off.src} className={styles.off}></img>
        </button>
    );
};

export default Hamburger;