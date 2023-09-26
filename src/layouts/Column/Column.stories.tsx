import type { Meta } from '@storybook/react';
import Column from '.';

const meta: Meta<typeof Column> = {
    component: Column,
}

export default meta;

export const Default = {
    args: {
        children:
            <>
                <div style={{ height: '100vh', backgroundColor: 'gray' }}>100vhの高さのdiv</div>
                <div style={{ height: '100vh', width: '100%' }}>100vhの高さのdiv</div>
            </>
    }
};