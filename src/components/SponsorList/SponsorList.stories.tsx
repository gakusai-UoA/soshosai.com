import type { Meta } from '@storybook/react';
import SponserList from '.';
import SponserCard from '../SponserCard';

const meta: Meta<typeof SponserList> = {
    component: SponserList,
}

export default meta;

export const Default = {
    args: {
        children:
            <>
                <SponsorCard name="Hoge"></SponsorCard>
                <SponsorCard name="Hoge"></SponsorCard>
                <SponsorCard name="Hoge"></SponsorCard>
                <SponsorCard name="Hoge"></SponsorCard>
                <SponsorCard name="Hoge"></SponsorCard>
                <SponsorCard name="Hoge"></SponsorCard>
            </>,
    },
};