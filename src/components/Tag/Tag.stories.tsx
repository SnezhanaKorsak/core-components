import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index';
import TestIcon from '../../common/TestIcon';

export default {
  title: 'Tag',
  component: Tag,
} as unknown as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const [checked, setChecked] = useState(false);

  return <Tag checked={checked} setChecked={setChecked} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Proxy',
};

export const Addon = Template.bind({});

Addon.args = {
  label: 'Proxy',
  rightAddons: <TestIcon />,
};
