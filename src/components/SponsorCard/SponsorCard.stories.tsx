import type { Meta } from '@storybook/react';
import SponsorCard from '.';

const meta: Meta<typeof SponsorCard> = {
    component: SponsorCard,
}

export default meta;

export const Valid = {
    render: () => (
        <div style={{ width: '300px', }}>
            <SponsorCard name='Hoge hoge' link='#' />
        </div>
    ),
};

export const Invalid = {
    render: () => (
        <div style={{ width: '300px', }}>
            <SponsorCard name='Hoge hoge' />
        </div>
    ),
};