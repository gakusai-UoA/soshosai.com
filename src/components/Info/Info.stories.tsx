import type { Meta } from '@storybook/react';
import Info from '.';

const meta: Meta<typeof Info> = {
    component: Info,
}

export default meta;

export const Default = {
    args: {
        children: `
        この度は、蒼翔祭ホームページを閲覧いただきありがとうございます。
        当学園祭へ来場される方へ、開催期間中の大学構内の利用について注意･お願いがございます。
        `,
    },
};