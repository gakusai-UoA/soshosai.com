import type { Meta } from '@storybook/react';
import GuestList from '.';
import Guest from '../Guest';

const meta: Meta<typeof GuestList> = {
    component: GuestList,
}

export default meta;

export const Default = {
    args: {
        children: (
            <>
                <Guest name="hoge hoge">hoge hoge hoge</Guest>
                <Guest name="hoge hoge">hoge hoge hoge</Guest>
                <Guest name="hoge hoge">hoge hoge hoge</Guest>
            </>
        )
        ,
    },
};