import styles from "./styles.module.css";
import Footer from "../../components/Footer";

type Props = {
    children: React.ReactNode,
};

const Base = ({ children }: Props) => {
    return (
        <div className={styles.body}>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

type MainProps = {
    children: React.ReactNode,
};

const Main = ({ children }: MainProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>{children}</div>
        </div >
    );
};

export default Base;

export { Main };