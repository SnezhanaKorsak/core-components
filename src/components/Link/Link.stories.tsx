import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './index';
import Typography from '../Typography';
import TestIcon from '../../common/TestIcon';

export default {
  title: 'Link',
  component: Link,
} as unknown as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return (
    <Typography.Title level={7} weight="semibold">
      <Link {...args} />
    </Typography.Title>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Read more',
  href: 'https://github.com/SnezhanaKorsak/core-components',
};

export const LeftAddons = Template.bind({});

LeftAddons.args = {
  label: 'Read more',
  href: 'https://github.com/SnezhanaKorsak/core-components',
  leftAddons: <TestIcon />,
};

export const RightAddons = Template.bind({});

RightAddons.args = {
  label: 'Read more',
  href: 'https://github.com/SnezhanaKorsak/core-components',
  rightAddons: <TestIcon />,
};
