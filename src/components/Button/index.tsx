import styles from './styles.module.css';

type Props = {
    link: string,
    children: React.ReactNode,
};

const Button = ({ link, children }: Props) => {
    return (
        <button className={styles.button}>
            <a className={styles.link} href={link}>{children}</a>
        </button>
    );
};

export default Button;