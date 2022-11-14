import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './index';

const options = [
  { id: '1', content: 'Software development' },
  { id: '2', content: 'Information security' },
  { id: '3', content: 'Internet of things' },
  { id: '4', content: 'Digital transformation' },
  { id: '5', content: 'Healthcare it' },
];

export default {
  title: 'Select',
  component: Select,
} as unknown as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'All categories',
  options: options,
};
