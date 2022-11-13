import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tab from './index';
import TestIcon from '../../common/TestIcon';

export default {
  title: 'Tab',
  component: Tab,
} as unknown as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  const [checked, setChecked] = useState(true);

  return <Tab checked={checked} setChecked={setChecked} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Monthly',
  size: 'l',
  rightAddons: <TestIcon />,
};

export const Alt = Template.bind({});

Alt.args = {
  label: 'Mo',
  variant: 'alt',
};
