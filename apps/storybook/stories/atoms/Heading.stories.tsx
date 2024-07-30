import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@package/ui';

type Story = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  title: 'atoms/Heading',
  component: Heading,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'radio' },
    },
    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      control: { type: 'select' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const heading: Story = {
  render: ({ ...args }) => <Heading {...args}>{args.content}</Heading>,
  args: {
    content: 'Lorem ipsum dolor sit amet...',
    component: 'h1',
    variant: 'h1',
  },
};
