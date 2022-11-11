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

  return (
    <Tab checked={checked} setChecked={setChecked} {...args}>
      Label
    </Tab>
  );
};

export const Default = Template.bind({});

Default.args = {
  size: 'l',
  rightAddons: <TestIcon />,
};

const Template2: ComponentStory<typeof Tab> = (args) => <Tab {...args}>Mo</Tab>;
export const Alt = Template2.bind({});

Alt.args = {
  variant: 'alt',
};
