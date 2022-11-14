import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapse from './index';
import Typography from '../Typography';

export default {
  title: 'Collapse',
  component: Collapse,
} as unknown as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => {
  const [expanded, setExpanded] = useState(false);

  const clickHandler = () => setExpanded(!expanded);

  return (
    <Typography.Title level={4} weight="bold">
      <Collapse expanded={expanded} clickHandler={clickHandler} {...args}>
        <Typography.Text level={1} weight="regular" color="#9497A1">
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
          euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
          orci. Sed quis lobortis eros.
        </Typography.Text>
      </Collapse>
    </Typography.Title>
  );
};

export const Example = Template.bind({});

Example.args = {
  collapsedLabel: 'What are data analytics?',
};

const Template2: ComponentStory<typeof Collapse> = (args) => {
  const [expanded, setExpanded] = useState(false);

  const clickHandler = () => setExpanded(!expanded);

  return (
    <Typography.Title level={4} weight="bold" color={expanded ? '#185CFF' : 'black'}>
      <Collapse expanded={expanded} clickHandler={clickHandler} {...args}>
        <Typography.Text level={1} weight="regular" color="#9497A1">
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
          euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
          orci. Sed quis lobortis eros.
        </Typography.Text>
      </Collapse>
    </Typography.Title>
  );
};

export const StyledCollapse = Template2.bind({});

StyledCollapse.args = {
  collapsedLabel: 'What are data analytics?',
  openIcon: '+',
  closeIcon: '--',
};
