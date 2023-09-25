import type { Meta } from '@storybook/react';
import Drawer from '.';

const meta: Meta<typeof Drawer> = {
    component: Drawer,
}

export default meta;

export const Default = {
    args: {
        opened: true,
    },
};