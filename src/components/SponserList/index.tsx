import { escapeHTML } from 'astro/runtime/server/escape.js';
import styles from './styles.module.css';

type Props = { children: React.ReactNode };

const SponserList = ({ children }: Props) => {
    return (
        <div>
            <div className={styles.center}>
                順不同、敬称略
            </div>
            <div className={styles.list}>
                {children}
            </div>
        </div>
    );
};

export default SponserList;