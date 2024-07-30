import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@package/ui';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    component: {
      options: ['p', 'span'],
      control: { type: 'select' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const text: Story = {
  render: ({ ...args }) => <Text {...args}>{args.content}</Text>,
  args: {
    content: 'Lorem ipsum dolor sit amet...',
    component: 'p',
  },
};
