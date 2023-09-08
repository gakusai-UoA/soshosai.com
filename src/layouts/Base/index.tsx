import React, { useState } from "react";
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import TopView from "../../components/TopView";

type Props = { children: React.ReactNode };

const Base = ({ children }: Props) => {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    return (
        <div className={styles.body} data-unscrollable={opened}>
            <TopView>
                <Header onClick={() => toggle()} />
                <Drawer opened={opened} />
            </TopView>
            {children}
        </div>
    );
};

export default Base;