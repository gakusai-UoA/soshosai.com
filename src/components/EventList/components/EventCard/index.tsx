import type React from "react";
import styles from './styles.module.css';

import plain from "./images/plain.svg";
import stage from "./images/stage.svg";
import shop from "./images/shop.svg";
import company from "./images/company.svg";
import exhibit from "./images/exhibit.svg";
import kids from "./images/kids.svg";
import gakusaiEvents from "./images/gakusaiEvents.svg";

type EventType = 'plain' | 'stage' | 'shop' | 'company' | 'exhibit' | 'kids' | 'gakusaiEvents';

type Images = Record<EventType, ImageMetadata>

const images: Images = {
    plain,
    stage,
    shop,
    company,
    exhibit,
    kids,
    gakusaiEvents,
};

type Props = {
    type: EventType,
};

const EventCard = ({ type }: Props) => {

    return (
        <div className={styles.event}>
            <img src={images[type].src} alt={type} />
        </div>
    );
};

export default EventCard;