import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleButton from './index';

export default {
  title: 'CircleButton',
  component: CircleButton,
} as unknown as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => <CircleButton {...args}>Learn more</CircleButton>;
export const Primary = Template.bind({});

Primary.args = {
  view: 'primary',
  size: 'large',
};
