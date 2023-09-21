import type { Meta } from '@storybook/react';
import SideMenu, { Contents, Anchor } from '.';

const meta: Meta<typeof SideMenu> = {
    component: SideMenu,
}

export default meta;

export const Default = {
    render: () => (
        <>
            <div>
                <div style={{ height: '70vh', backgroundColor: 'skyblue', }}></div>
                <SideMenu />
                <Contents>
                    <Anchor id='1' name='1' />
                    <div style={{ height: '70vh', backgroundColor: 'gray', border: 'solid white', }}>1</div>
                    <Anchor id='2' name='2' />
                    <div style={{ height: '70vh', backgroundColor: 'gray', border: 'solid white', }}>2</div>
                    <Anchor id='3' name='3' />
                    <div style={{ height: '70vh', backgroundColor: 'gray', border: 'solid white', }}>3</div>
                    <Anchor id='4' name='4' />
                    <div style={{ height: '70vh', backgroundColor: 'gray', border: 'solid white', }}>4</div>
                    <Anchor id='5' name='5' />
                    <div style={{ height: '70vh', backgroundColor: 'gray', border: 'solid white', }}>5</div>
                </Contents>
            </div>
            <div style={{ height: '70vh', backgroundColor: 'skyblue', }}></div>
        </>
    ),
};
