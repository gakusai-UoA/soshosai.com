import type { Meta } from '@storybook/react';
import Title from '.';

const meta: Meta<typeof Title> = {
    component: Title,
}

export default meta;

export const Default = {
    args: {
        children: 'ご来場の方へ',
    },
};