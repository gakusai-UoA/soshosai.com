import type { Meta } from '@storybook/react';
import Hamburger from '.';

const meta: Meta<typeof Hamburger> = {
    component: Hamburger,
}

export default meta;

export const Default = {
    args: {
        onClick: () => { },
    },
};