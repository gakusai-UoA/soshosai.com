import type { Meta } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta;

export const Default = {
    args: {
        link: "#",
        children: "協賛資料を参照",
    },
};