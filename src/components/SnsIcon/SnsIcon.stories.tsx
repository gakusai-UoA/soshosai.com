import type { Meta } from '@storybook/react';
import SnsIcon from '.';

const meta: Meta<typeof SnsIcon> = {
    component: SnsIcon,
}

export default meta;

export const X = {
    render: () => (
        <div style={{ width: '100px', }}>
            <SnsIcon type='x' />
        </div>
    ),
};

export const Instagram = {
    render: () => (
        <div style={{ width: '100px', }}>
            <SnsIcon type='insta' />
        </div>
    ),
};