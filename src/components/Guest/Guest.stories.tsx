import type { Meta } from '@storybook/react';
import Guest from '.';

const meta: Meta<typeof Guest> = {
    component: Guest,
}

export default meta;

export const Default = {
    args: {
        name: <>サク山<br />チョコ次郎</>,
        children: '説明のテキスト',
    },
};