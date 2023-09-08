import type { Meta } from '@storybook/react';
import TopView from '.';

const meta: Meta<typeof TopView> = {
    component: TopView,
}

export default meta;

export const Default = {
    args: {
        children: "",
    },
};