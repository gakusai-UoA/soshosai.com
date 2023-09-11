import React, { useState } from "react";
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import TopView from "../../components/TopView";
import Footer from "../../components/Footer";

type Props = { children: React.ReactNode };

const Base = ({ children }: Props) => {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    return (
        <div className={styles.body} data-unscrollable={opened}>
            <TopView>
                <div className={styles.header}>
                    <Header onClick={() => toggle()} />
                </div>
                <Drawer opened={opened} />
            </TopView>
            <div className={styles.main}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Base;