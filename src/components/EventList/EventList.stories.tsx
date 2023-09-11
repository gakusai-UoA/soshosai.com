import type { Meta } from '@storybook/react';
import EventList from '.';
import EventCard from './components/EventCard';

const meta: Meta<typeof EventList> = {
    component: EventList,
}

export default meta;

export const Default = {
    args: {
        children: (
            <>
                <EventCard type="stage">A</EventCard>
                <EventCard type="shop">B</EventCard>
                <EventCard type="company">C</EventCard>
                <EventCard type="exhibit">D</EventCard>
                <EventCard type="kids">E</EventCard>
                <EventCard type="gakusaiEvents">F</EventCard>
            </>
        ),
    },
};