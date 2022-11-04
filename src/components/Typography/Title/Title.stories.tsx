import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../../Typography';
import Title from './index';

export default {
  title: 'Typography',
  component: Title,
} as unknown as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Typography.Title {...args}>Default Headline</Typography.Title>
);
export const TitleExample = Template.bind({});

TitleExample.args = {
  level: 1,
};
