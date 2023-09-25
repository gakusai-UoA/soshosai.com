import type { Meta } from '@storybook/react';
import MainPage from '.';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
}

export default meta;

export const Default = {
    args: {
        children: <div style={{ height: '100vh' }}>100vhの高さのdiv</div>,
    }
};