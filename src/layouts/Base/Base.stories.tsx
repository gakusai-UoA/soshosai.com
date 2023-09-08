import type { Meta } from '@storybook/react';
import Base from '.';

const meta: Meta<typeof Base> = {
    component: Base,
}

export default meta;

export const Default = {
    args: {
        children: "",
    }
};