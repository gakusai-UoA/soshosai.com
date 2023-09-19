import type React from 'react';
import styles from './styles.module.css';

type Props = {
    title: string,
    children: React.ReactNode,
};

const Section = ({ title, children }: Props) => {
    return (
        <section className={styles.section}>
            <header className={styles.title}>{title}</header>
            {children}
        </section>
    );
};

export default Section;