import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

import TestIcon from '../../common/TestIcon';

export default {
  title: 'Button',
  component: Button,
} as unknown as ComponentMeta<typeof Button>;

const Template1: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template1.bind({});

Primary.args = {
  label: 'Learn more',
  view: 'primary',
  size: 'l',
  block: false,
};

const Template2: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithIcon = Template2.bind({});

WithIcon.args = {
  label: 'Watch the demo',
  view: 'primary',
  size: 'm',
  block: false,
  leftAddons: <TestIcon />,
};

const Template3: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonIcon = Template3.bind({});

ButtonIcon.args = {
  label: <TestIcon />,
  view: 'primary',
  size: 'xs',
  block: false,
};
