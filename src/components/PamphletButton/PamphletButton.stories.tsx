import type { Meta } from '@storybook/react';
import Pamphlet from '.';

const meta: Meta<typeof Pamphlet> = {
    component: Pamphlet,
}

export default meta;

export const Default = {
    args: {
        invalid: false,
        link: "#",
    },
};

export const invalid = {
    args: {
        invalid: true,
        link: '#',
    },
};