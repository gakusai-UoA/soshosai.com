import styles from "./styles.module.css";
import Footer from "../../components/Footer";

type Props = {
    children: React.ReactNode,
};

const Base = ({ children }: Props) => {
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Base;