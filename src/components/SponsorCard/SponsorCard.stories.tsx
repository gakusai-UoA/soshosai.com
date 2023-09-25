import type { Meta } from '@storybook/react';
import SponsorCard from '.';

const meta: Meta<typeof SponsorCard> = {
    component: SponsorCard,
}

export default meta;

export const Valid = {
    args: {
        name: 'Hoge Hoge',
        link: '#',
    },
};

export const Invalid = {
    args: {
        name: 'Hoge Hoge',
    },
};