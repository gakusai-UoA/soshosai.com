import { useState } from "react";
import Drawer from "../Drawer";
import Header from "../Header";
import styles from './styles.module.css';

const HeaderDrawer = () => {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    return (
        <div>
            <div className={styles.header}>
                <Header onClick={() => toggle()} />
            </div>
            <Drawer opened={opened} />
        </div>
    );
};

export default HeaderDrawer;