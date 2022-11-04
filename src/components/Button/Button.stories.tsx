import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

import TestIcon from '../../common/TestIcon';

export default {
  title: 'Button',
  component: Button,
  args: {
    block: {
      control: {
        type: 'boolean',
      },
    },
  },
} as unknown as ComponentMeta<typeof Button>;

const Template1: ComponentStory<typeof Button> = (args) => <Button {...args}>Learn more</Button>;
export const Primary = Template1.bind({});

Primary.args = {
  view: 'primary',
  size: 'l',
  block: false,
};

const Template2: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <TestIcon />
    Watch the demo
  </Button>
);

export const WithIcon = Template2.bind({});

WithIcon.args = {
  view: 'primary',
  size: 'm',
  block: false,
};

const Template3: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <TestIcon />
  </Button>
);

export const ButtonIcon = Template3.bind({});

ButtonIcon.args = {
  view: 'primary',
  size: 'xs',
  block: false,
};
