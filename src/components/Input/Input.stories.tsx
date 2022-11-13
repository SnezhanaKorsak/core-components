import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';
import Button from '../Button';

export default {
  title: 'Input',
  component: Input,
} as unknown as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div style={{ width: '345px' }}>
      <Input {...args} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  view: 'primary',
  label: 'Name',
  error: false,
  disabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  view: 'secondary',
  label: 'Your email',
  buttonAddons: <Button label="Send" size="s" style={{ background: 'white' }} />,
  error: false,
  disabled: false,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  view: 'tertiary',
  label: 'Your email',
  error: false,
  disabled: false,
};
