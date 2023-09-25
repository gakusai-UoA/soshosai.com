import type { Meta } from '@storybook/react';
import Header from '.';
import Hamburger from './components/Hamburger';

const meta: Meta<typeof Header> = {
    component: Header,
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
}

export default meta;

export const Default = {
    args: {
        onClick: () => { },
    },
};