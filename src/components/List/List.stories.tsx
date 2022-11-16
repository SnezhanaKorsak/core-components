import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './index';
import Typography from '../Typography';
import TestIcon from '../../common/TestIcon';

const data = [
  { id: 0, content: 'Extract, transform, load (ETL)' },
  { id: 1, content: 'Extract, load, transform (ELT)' },
  { id: 2, content: 'Data governance ' },
];

export default {
  title: 'List',
  component: List,
} as unknown as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  return (
    <Typography.Text level={1} font="Manrope, sans-serif">
      <List {...args}>{data.map(({ content }) => content)}</List>
    </Typography.Text>
  );
};
export const UList = Template.bind({});

UList.args = {
  tag: 'ul',
  marker: <TestIcon />,
};

export const OList = Template.bind({});

OList.args = {
  tag: 'ol',
};
