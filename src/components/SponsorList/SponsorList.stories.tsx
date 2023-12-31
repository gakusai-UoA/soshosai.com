import type { Meta } from '@storybook/react';
import SponsorList from '.';
import SponsorCard from '../SponsorCard';

const meta: Meta<typeof SponsorList> = {
    component: SponsorList,
}

export default meta;

export const Default = {
    args: {
        children:
            <>
                <SponsorCard link='#'>Hoge Hoge</SponsorCard>
                <SponsorCard link='#'>Hoge Hoge</SponsorCard>
                <SponsorCard>Hoge Hoge</SponsorCard>
                <SponsorCard link='#'>Hoge Hoge</SponsorCard>
                <SponsorCard>Hoge Hoge</SponsorCard>
                <SponsorCard>Hoge Hoge</SponsorCard>
                <SponsorCard link='#'>Hoge Hoge</SponsorCard>
            </>,
    },
};