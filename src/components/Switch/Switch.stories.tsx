import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './index';

export default {
  title: 'Switch',
  component: Switch,
} as unknown as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(true);

  const clickHandler = () => setChecked(!checked);

  return <Switch checked={checked} clickHandler={clickHandler} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  options: ['Monthly', 'Yearly'],
  size: 'l',
};

export const Alt = Template.bind({});

Alt.args = {
  options: ['Mo', 'Yr'],
  variant: 'alt',
};
