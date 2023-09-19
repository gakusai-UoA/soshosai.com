import type { Meta } from '@storybook/react';
import Section from '.';

const meta: Meta<typeof Section> = {
    component: Section,
}

export default meta;

export const Default = {
    args: {
        title: '会場内注意',
        children:
            <ul>
                <li>構内は全面禁煙となっております。</li>
                <li>衛生面の都合上、ペット同伴はお断りさせていただきます。</li>
                <li>ゴミは分別の上、ゴミ箱へお願いいたします。<br />※リサイクルにご協力ください。</li>
                <li>他の来場者様や参加学生への迷惑となる行為はお控えください。</li>
                <li>小さいお子様連れのお客様は、お子様から目を離されませんようにお願いいたします。</li>
                <li>迷子の対応に関しては、学園祭本部テントまでお願いいたします。</li>
                <li>会場内での、窃盗等の責任は一切負いかねます。</li>
            </ul>,
    },
};