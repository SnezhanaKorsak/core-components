import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../../Typography';

import Text from './index';

export default {
  title: 'Typography',
  component: Text,
} as unknown as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Typography.Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tenetur?
  </Typography.Text>
);
export const TextExample = Template.bind({});

TextExample.args = {
  level: 1,
};
