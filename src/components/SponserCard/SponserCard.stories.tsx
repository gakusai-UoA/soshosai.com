import type { Meta } from '@storybook/react';
import SponserCard from '.';

const meta: Meta<typeof SponserCard> = {
    component: SponserCard,
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